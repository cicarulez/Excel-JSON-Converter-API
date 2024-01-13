import {ExcelData, ExcelDataColValue} from "../interfaces/excel/excel-data.interface";
import {FieldErrors, ValidateError} from "@tsoa/runtime";

export default function isExcelData(obj: any): asserts obj is ExcelData {
    const isExcelDataColValueArray = (value: any): value is ExcelDataColValue[] => {
        return Array.isArray(value) && value.every((item: any) => typeof item === "object");
    };

    if (typeof obj !== "object" || obj === null) {
        throw new ValidateError({ excelData: { message: "Object is not of type ExcelData." } }, "Invalid object type.");
    }

    const sheetNames = Object.keys(obj);
    const invalidSheetNames = sheetNames.filter(sheetName => !isExcelDataColValueArray(obj[sheetName]));

    if (invalidSheetNames.length > 0) {
        const fieldErrors: FieldErrors = {};

        invalidSheetNames.forEach(sheetName => {
            fieldErrors[sheetName] = {
                message: `Value for sheet '${sheetName}' does not conform to the required format.`,
                value: obj[sheetName]
            };
        });

        throw new ValidateError(fieldErrors, "Some sheet values do not conform to the required format.");
    }
}
