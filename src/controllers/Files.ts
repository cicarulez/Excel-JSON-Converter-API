import {Controller, Middlewares, Post, Route, Tags, UploadedFile} from "tsoa";
import formDataMiddleware from "../middlewares/form-data.middleware";
import ExcelService from "../services/Excel";
import GenericResponse from "../interfaces/generic-response.interface";
import {ExcelData} from "../interfaces/excel/excel-data.interface";

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
        const result: ExcelData = await excelService.convertExcelToJson(file.buffer);
        try {
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


}
