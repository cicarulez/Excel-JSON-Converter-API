import ExcelJS from 'exceljs';
import ExcelService from '../src/services/Excel';

describe('ExcelService', () => {
  const service = new ExcelService();

  it('converts Excel to JSON with ISO date strings', async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Sheet1');
    const date = new Date(Date.UTC(2020, 0, 2, 3, 4, 5));
    sheet.addRow([date, 'East', 10, true]);

    const buffer = await workbook.xlsx.writeBuffer();
    const result = await service.convertExcelToJson(Buffer.from(buffer));

    expect(result.Sheet1[0].col_1).toBe('2020-01-02T03:04:05.000Z');
    expect(result.Sheet1[0].col_2).toBe('East');
    expect(result.Sheet1[0].col_3).toBe(10);
    expect(result.Sheet1[0].col_4).toBe(true);
  });

  it('converts JSON to Excel', async () => {
    const data = {
      Sheet1: [
        { col_1: 'A', col_2: 5, col_3: false }
      ]
    };

    const buffer = await service.convertJsonToExcel(data);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(Buffer.from(buffer));

    const sheet = workbook.getWorksheet('Sheet1');
    const row = sheet.getRow(1);

    expect(row.getCell(1).value).toBe('A');
    expect(row.getCell(2).value).toBe(5);
    expect(row.getCell(3).value).toBe(false);
  });
});
