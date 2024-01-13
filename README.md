# Excel-JSON-Converter-API

This repository hosts an API-powered microservice designed to seamlessly convert data between Excel and JSON formats. With two distinctive endpoints, it enables users to extract data from Excel files and generate Excel matrices from JSON objects. The API ensures a smooth interchange of structured data, facilitating efficient handling and transformation between these widely used data formats.

## Key Features
- **Excel-to-JSON Endpoint:** Extracts data from Excel files and converts it into structured JSON format.
    - **Description:** Accepts uploaded Excel files and processes them to generate a corresponding JSON file.
    - **HTTP Method:** POST
    - **Request Format:** Accepts form data with the "file" field for Excel file upload.
    - **Functionality:** Upon receiving an Excel file, this endpoint converts the data into a structured JSON format, allowing seamless integration and utilization within applications and systems.


- **JSON-to-Excel Endpoint:** Generates Excel matrices from JSON data, facilitating organized representation of JSON objects in a tabular format.
    - **Description:** Converts JSON data into an Excel file.
    - **HTTP Method:** POST
    - **Request Format:** Accepts JSON data.
    - **Response:** Returns a JSON of type ExcelData containing Excel data
    - **Functionality:** This endpoint processes incoming JSON data and generates a downloadable Excel file as a stream, providing a convenient way to convert structured JSON information into an Excel spreadsheet format.


- **Health Check Endpoint:**
  - **Description:** Provides a health check endpoint to verify the status and operational health of the Excel-JSON Converter API.
  - **HTTP Method:** GET
  - **Response:** Returns a JSON response indicating the current status of the API, including details such as server uptime, version information, and any relevant system metrics.
  - **Functionality:** Users can periodically query this endpoint to ensure that the API is running smoothly and is available for processing requests. The health check response can include information about database connectivity, system resources, and other vital statistics. This feature enhances the reliability and maintainability of the API by allowing quick monitoring of its overall health.


This versatile and user-friendly API serves as a valuable tool for developers, facilitating the conversion process and enabling streamlined integration of Excel and JSON data within applications and systems.
