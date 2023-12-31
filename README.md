# Excel-JSON-Converter-API

This repository hosts an API-powered microservice designed to seamlessly convert data between Excel and JSON formats. With two distinctive endpoints, it enables users to extract data from Excel files and generate Excel matrices from JSON objects. The API ensures a smooth interchange of structured data, facilitating efficient handling and transformation between these widely used data formats.

## Key Features
- **Excel-to-JSON Endpoint:** Extracts data from Excel files and converts it into structured JSON format.
    - **Description:** Accepts uploaded Excel files and processes them to generate a corresponding JSON file.
    - **HTTP Method:** POST
    - **Request Format:** Accepts form data with the "file" field for Excel file upload.
    - **Functionality:** Upon receiving an Excel file, this endpoint converts the data into a structured JSON format, allowing seamless integration and utilization within applications and systems.


- **JSON-to-Excel Endpoint:** Generates Excel matrices from JSON data, facilitating organized representation of JSON objects in a tabular format.

This versatile and user-friendly API serves as a valuable tool for developers, facilitating the conversion process and enabling streamlined integration of Excel and JSON data within applications and systems.
