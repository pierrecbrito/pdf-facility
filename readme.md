# PDF Facility

PDF Facility is a SaaS application for generating PDF documents from web pages and DOCX templates. This project uses Supabase, Express, and React to provide a seamless experience for users to convert URLs and DOCX templates into PDF files.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Convert web pages to PDF
- Convert DOCX templates to PDF
- User authentication and authorization
- Store conversion history
- API key management for users

## Tech Stack

- **Backend**: Node.js, Express, Supabase
- **Frontend**: React
- **PDF Generation**: Puppeteer

## Installation

### Prerequisites

- Node.js
- npm or yarn
- Supabase account

### Backend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/pdf-facility.git
    cd pdf-facility/backend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your Supabase credentials:

    ```env
    SUPABASE_URL=your-supabase-url
    SUPABASE_KEY=your-supabase-key
    ```

4. Start the backend server:

    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```sh
    cd ../frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the frontend development server:

    ```sh
    npm start
    ```

## Usage

### Convert URL to PDF

1. Authenticate the user.
2. Send a POST request to the `/convert/:uniqueId` endpoint with the URL to be converted and the user's API key.

### Convert DOCX Template to PDF

1. Authenticate the user.
2. Send a POST request to the `/convert-docx/:uniqueId` endpoint with the DOCX template and the user's API key.

## API Endpoints

### Authentication

- `POST /auth/login`: User login
- `POST /auth/register`: User registration

### URL Conversion

- `POST /convert/:uniqueId`: Convert a web page to PDF

### DOCX Conversion

- `POST /convert-docx/:uniqueId`: Convert a DOCX template to PDF

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.