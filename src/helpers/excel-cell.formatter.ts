import ExcelJS from "exceljs";

export default function excelCellFormatter(cell: ExcelJS.Cell): string | number | boolean | null {
    let formattedValue = null;
    if (cell.result && typeof cell.result !== 'object') {
        formattedValue = cell.result;
    } else if (cell.value && cell.effectiveType) {
        switch (cell.effectiveType) {
            case ExcelJS.ValueType.Hyperlink:
                formattedValue = cell.hyperlink;
                break;
            default:
                // Check if the type of cell.value is string, number, boolean, or Date
                if (
                    typeof cell.value === 'string' ||
                    typeof cell.value === 'number' ||
                    typeof cell.value === 'boolean' ||
                    cell.value instanceof Date
                ) {
                    formattedValue = cell.value as string | number | boolean;
                }
            // If the type is not string, number, boolean, or Date, formattedValue remains null
        }
    }
    return formattedValue;
}
