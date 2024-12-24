# Application Table Component

## Objective

The goal of this project is to create a table component to display a list of applications. The table is designed to be user-friendly and interactive, providing features such as sorting, pagination, and filtering by different application details.

## Features

- **Responsive Table**: Displays a list of applications in a clean and responsive design.
- **Columns**:
  - Application No
  - Applicant Name
  - Application Date
  - Student ID
  - Paid Amount
  - Status (English)
  - Status (Arabic)
  - Last Updated
- **Interactivity**:
  - Sorting by columns like Application No, Applicant Name, and Application Date.
  - Pagination if the number of records exceeds the defined threshold.
  - A search bar to filter by Applicant Name, Status, or Student ID.
- **Data Fetching**: Fetches data from a backend API and handles loading/error states.

## Prerequisites

1. **Node.js**: This project requires Node.js to run. If you don't have Node.js installed, you can download it from [Node.js official website](https://nodejs.org/en/download/package-manager).
   
2. **npm**: Node package manager (npm) comes bundled with Node.js and is required to install dependencies.

## Setup and Installation

### 1. Install Node.js

Before proceeding, ensure Node.js is installed on your system. You can find the installation guide on [Node.js download page](https://nodejs.org/en/download/package-manager).

### 2. Install Project Dependencies

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd <project-folder>

After cloning the repository, install all the required dependencies by running the following command:

npm install

### 3. Start the Development Server
Once the dependencies are installed, start the development server by running:
npm start
This will start the local development server. You can now access the project in your browser at:
http://localhost:3000