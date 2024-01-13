import {ExcelDataColValue} from "../interfaces/excel/excel-data.interface";
import {FieldErrors, ValidateError} from "@tsoa/runtime";

function isColFormat(key: string): boolean {
    return /^col_\d+$/.test(key);
}

export default function hasColsKeys(obj: ExcelDataColValue): asserts obj is Record<string, string | number | null | boolean> {
    const keys = Object.keys(obj);
    const nonConformingKeys = keys.filter(key => !isColFormat(key));

    if (nonConformingKeys.length) {
        const fieldErrors: FieldErrors = {};

        nonConformingKeys.forEach(key => {
            fieldErrors[key] = {
                message: `Key '${key}' does not conform to the required format.`,
                value: obj[key]
            };
        });

        throw new ValidateError(fieldErrors, "Some keys do not conform to the required format.");
    }
}
