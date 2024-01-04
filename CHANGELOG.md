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
