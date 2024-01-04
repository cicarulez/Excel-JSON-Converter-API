import ExcelJS from 'exceljs';
import {ExcelData} from "../interfaces/excel/excel-data.interface";
import excelCellFormatter from "../helpers/excel-cell-formatter";

class ExcelService {
    async convertExcelToJson(excelBuffer: Buffer): Promise<ExcelData> {
        const workbook = new ExcelJS.Workbook();
        const result: any = {};

        await workbook.xlsx.load(<Buffer>excelBuffer, {
            ignoreNodes: [
                'dataValidations' // ignores the workbook's Data Validations
            ]
        });

        workbook.eachSheet((worksheet) => {
            const sheetData: any[] = [];
            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber !== 1) {
                    const rowData: any = {};
                    row.eachCell((cell, colNumber) => {
                        rowData[`col_${colNumber}`] = excelCellFormatter(cell);
                    });
                    sheetData.push(rowData);
                }
            });
            result[worksheet.name] = sheetData;
        });

        return result;
    }
}

export default ExcelService;
