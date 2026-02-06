<h1>Excel-JSON-Converter-API</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.3.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained-yes-blue.svg" />
  <img alt="CI" src="https://github.com/cicarulez/Excel-JSON-Converter-API/actions/workflows/ci.yml/badge.svg" />
</p>

> an *auth-less* [express](https://expressjs.com/) server *OpenAPI-compliant* with [tsoa](https://tsoa-community.github.io/docs/).

## 🚀 quick start

```sh
$ git clone https://github.com/cicarulez/Excel-JSON-Converter-API.git
$ npm i
$ cp .env.example .env.development
$ npm run start:dev
```

Open Swagger docs: `http://localhost:3000/api-docs`

## ⚙️ environment variables

The app loads configuration from `.env` and `.env.{NODE_ENV}` (for example `.env.development`).

Available variables:
- `NODE_ENV` (default: `development`)
- `PORT` (default: `3000`)
- `SWAGGER` (default: `false`)
- `TOTAL_FORM_SIZE_MB` (default: `50`)

## 🐳 docker

```sh
docker run --env-file .env.development -p 3000:3000 -t -d cicarulez/excel-json-converter:latest
```

## 📌 endpoints

Base path: `/api`

### 1) Convert Excel → JSON

`POST /files/convertExcelToJson`

- Content-Type: `multipart/form-data`
- Field: `file` (accepts `.xlsx`, `.xls`)

Example curl:
```sh
curl -X POST http://localhost:3000/api/files/convertExcelToJson \
  -F "file=@./example.xlsx"
```

Example response:
```json
{
  "data": {
    "Sheet1": [
      {
        "col_1": "2020-01-02T03:04:05.000Z",
        "col_2": "East",
        "col_3": 10,
        "col_4": true
      }
    ]
  },
  "message": "Excel file read correctly"
}
```

### 2) Convert JSON → Excel

`POST /files/convertJsonToExcel`

- Content-Type: `application/json`
- Returns: Excel file stream (`.xlsx`)

Example curl:
```sh
curl -X POST http://localhost:3000/api/files/convertJsonToExcel \
  -H "Content-Type: application/json" \
  -o output.xlsx \
  -d '{
    "fileNamePrefix": "generated",
    "data": {
      "Sheet1": [
        {"col_1": "A", "col_2": 5, "col_3": false}
      ]
    }
  }'
```

### 3) Health check

`GET /status/serverInfo`

Example curl:
```sh
curl http://localhost:3000/api/status/serverInfo
```

## 🧱 data format (ExcelData)

The JSON structure is:

```json
{
  "SheetName": [
    {"col_1": "value", "col_2": 123, "col_3": true},
    {"col_1": "value2", "col_2": 456, "col_3": false}
  ]
}
```

Notes:
- Columns are 1-based: `col_1`, `col_2`, ...
- Dates are encoded as ISO strings when converting from Excel.

## 🧪 tests

```sh
$ npm test
```

## ✅ common errors

- `400 No file uploaded.`
  - `file` field missing in multipart request.
- `400 No valid file uploaded...`
  - Only `.xlsx` and `.xls` are accepted.
- `422 Validation Failed`
  - JSON body does not match `ExcelData` format.

## 📝 highlight

* It includes documentation of available routes using swagger. visit `localhost:3000/api-docs` after localhost setup.

## 🤝 contributing

Contributions are welcome. Please open an issue or a pull request with a clear description of the change and the motivation behind it.
