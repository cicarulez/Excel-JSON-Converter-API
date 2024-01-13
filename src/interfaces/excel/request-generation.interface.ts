import {ExcelData} from "./excel-data.interface";

export interface RequestGeneration {
    data: ExcelData;
    fileNamePrefix?: string
}
