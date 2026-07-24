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
### Screenshot
<img width="1364" height="252" alt="image" src="https://github.com/user-attachments/assets/5683ce0b-a434-4149-a784-e96a10d11661" />

<img width="1366" height="730" alt="image" src="https://github.com/user-attachments/assets/38d20c55-b89f-41fd-92d1-3e264a908f50" />


The error is automatically saved in:

```
logs/error.log
```
