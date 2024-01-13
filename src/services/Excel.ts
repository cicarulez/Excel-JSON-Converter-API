import ExcelJS from 'exceljs';
import {ExcelData, ExcelDataColValue} from "../interfaces/excel/excel-data.interface";
import excelCellFormatter from "../helpers/excel-cell.formatter";
import isExcelData from "../helpers/is-excel-data.validator";

class ExcelService {
    async convertExcelToJson(excelBuffer: Buffer): Promise<ExcelData> {
        const workbook = new ExcelJS.Workbook();
        const result: ExcelData = {};

        await workbook.xlsx.load(<Buffer>excelBuffer, {
            ignoreNodes: [
                'dataValidations' // ignores the workbook's Data Validations
            ]
        });

        workbook.eachSheet((worksheet) => {
            const sheetData: ExcelDataColValue[] = [];
            worksheet.eachRow((row) => {
                const rowData: ExcelDataColValue = {};
                row.eachCell((cell, colNumber) => {
                    rowData[`col_${colNumber}`] = excelCellFormatter(cell);
                });
                sheetData.push(rowData);
            });
            result[worksheet.name] = sheetData;
        });

        return result;
    }

    async convertJsonToExcel(data: ExcelData): Promise<ExcelJS.Buffer> {
        isExcelData(data);
        const workbook = new ExcelJS.Workbook();

        for (const sheetName in data) {
            if (Object.prototype.hasOwnProperty.call(data, sheetName)) {
                const sheetData = data[sheetName];
                const worksheet = workbook.addWorksheet(sheetName);

                sheetData.forEach((rowData) => {
                    const row = worksheet.addRow([]);
                    Object.keys(rowData).forEach((colKey) => {
                        const colNumber = parseInt(colKey.split('_')[1]);
                        row.getCell(colNumber).value = rowData[colKey];
                    });
                });
            }
        }

        return await workbook.xlsx.writeBuffer();
    }

}

export default ExcelService;
