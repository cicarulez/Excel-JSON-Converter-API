export interface ExcelData {
    [sheetName: string]: ExcelDataColValue[];
}

/**
 * @example
 * {
 *   "col_1": "2018-01-06T00:00:00.000Z",
 *   "col_2": "East",
 *   "col_3": "Martha",
 *   "col_4": "Alexander",
 *   "col_5": "Television",
 *   "col_6": 95,
 *   "col_7": 1198,
 *   "col_8": 113810,
 *   "col_9": "test",
 *   "col_10": "test",
 *   "col_11": null,
 *   "col_12": "http://www.google.it/",
 *   "col_13": true
 * }
 */
export interface ExcelDataColValue {
    [columnName: string]: string | number | boolean | null | undefined;
}
