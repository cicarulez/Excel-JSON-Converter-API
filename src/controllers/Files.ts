import {Body, Controller, Middlewares, Request, Post, Route, Tags, UploadedFile} from "tsoa";
import formDataMiddleware from "../middlewares/form-data.middleware";
import ExcelService from "../services/Excel";
import GenericResponse from "../interfaces/generic-response.interface";
import {ExcelData} from "../interfaces/excel/excel-data.interface";
import { Request as ExRequest } from 'express';
import { Readable } from 'stream';

const excelService = new ExcelService();

@Route("files")
@Tags('Files')
export class FilesController extends Controller {

    /**
     * Upon receiving an Excel file, this endpoint converts the data into a structured JSON format,
     * allowing seamless integration and utilization within applications and systems
     * @summary Extracts data from Excel files and converts it into structured JSON format.
     * @param file Accept xlsx, xls
     */
    @Post("convertExcelToJson")
    @Middlewares([formDataMiddleware])
    public async convertExcelToJson(@UploadedFile() file: Express.Multer.File): Promise<GenericResponse<ExcelData>> {
        try {
            const result: ExcelData = await excelService.convertExcelToJson(file.buffer);
            this.setStatus(200);
            return {
                data: result,
                message: 'Excel file read correctly'
            };
        } catch (error) {
            this.setStatus(500);
            throw error;
        }
    }

    /**
     * This endpoint processes incoming JSON data and generates a downloadable Excel file as a stream,
     * providing a convenient way to convert structured JSON information into an Excel spreadsheet format
     * @summary Converts structured JSON data into a downloadable Excel file stream.
     * @param {ExcelData} requestBody The structured JSON data to be converted into an Excel file.
     * @param request
     * @ignore
     */
    @Post("convertJsonToExcel")
    public async convertJsonToExcel(@Body() requestBody: ExcelData, @Request() request: ExRequest): Promise<void> {
        try {
            request.res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            request.res.setHeader('Content-Disposition', `attachment; filename="generated_${Date.now()}.xlsx"`);
            const readStream = Readable.from([await excelService.convertJsonToExcel(requestBody)]);
            readStream.pipe(request.res);
            await new Promise<void>((resolve, reject) => {
                readStream.on("end", () => {
                    request.res.end();
                    resolve();
                });
            });
        } catch (error) {
            this.setStatus(500);
            throw error;
        }
    }


}
