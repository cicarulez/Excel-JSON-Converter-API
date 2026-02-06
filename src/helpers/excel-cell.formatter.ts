import ExcelJS from "exceljs";

export default function excelCellFormatter(cell: ExcelJS.Cell): string | number | boolean | null {
    let formattedValue: string | number | boolean | null = null;

    if (cell.result) {
        if (cell.result instanceof Date) {
            formattedValue = cell.result.toISOString();
        } else if (typeof cell.result !== 'object') {
            formattedValue = cell.result as string | number | boolean;
        }
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
                    typeof cell.value === 'boolean'
                ) {
                    formattedValue = cell.value;
                } else if (cell.value instanceof Date) {
                    formattedValue = cell.value.toISOString();
                }
            // If the type is not string, number, boolean, or Date, formattedValue remains null
        }
    }
    return formattedValue;
}
