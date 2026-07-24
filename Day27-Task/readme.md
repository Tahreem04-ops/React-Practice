# Day 27 - Error Logging with Winston

## Overview

This project demonstrates global error handling in an Express.js application using Winston for logging. All application errors are automatically captured and stored in a log file.

## Technologies Used

- Node.js
- Express.js
- Winston
- Nodemon

## Features

- Global error handling middleware
- Winston logger configuration
- Automatic error logging to `logs/error.log`
- JSON formatted log entries
- Test route for generating errors

## Project Structure

```
server/
│
├── logs/
│   └── error.log
├── middleware/
│   └── errorHandler.js
├── logger.js
├── server.js
└── package.json
```

## Installation

```bash
npm install
```

## Run Project

```bash
npm run dev
```

## Test Error Logging

Open:

```
http://localhost:5000/error
```

The application returns:

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

The error is automatically saved in:

```
logs/error.log
```