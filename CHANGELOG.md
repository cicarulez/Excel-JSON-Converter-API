## [1.2.0] - 2024-01-07

### Added
- Added the "files" controller with the "convertJsonToExcel" endpoint
  - This new endpoint accepts JSON data and generates a corresponding Excel file.

#### Endpoint: "convertJsonToExcel"

- **Description:** Converts JSON data into an Excel file.
- **HTTP Method:** POST
- **Request Format:** Accepts JSON data.
- **Response:** Returns an Excel file as a stream.
- **Functionality:** This endpoint processes incoming JSON data and generates a downloadable Excel file as a stream, providing a convenient way to convert structured JSON information into an Excel spreadsheet format.


## [1.0.1] - 2024-01-04

### Added
- Added the "files" controller with the "convertExcelToJson" endpoint
    - This endpoint accepts form data with the "file" field, enabling the upload of Excel files and their conversion to JSON format.

#### Endpoint: "convertExcelToJson"

- **Description:** Converts uploaded Excel files to JSON format.
- **HTTP Method:** POST
- **Request Format:** Accepts form data with a field named "file" for Excel file upload.
- **Functionality:** Upon receiving an Excel file, this endpoint processes it and generates a corresponding JSON file.

## [1.0.0] - 2023-12-29

### Added
- Implemented 'status' controller to display server information

This release marks the initial setup of the application, introducing the 'status' controller to showcase basic server details. Built using Express.js and TSOA for Swagger integration.
