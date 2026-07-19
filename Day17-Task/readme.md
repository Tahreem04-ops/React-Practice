# Day 17 - Zod Validation

This project demonstrates how to validate incoming request data using Zod in an Express.js application.

## Features

- Express Server
- Zod Validation
- validateUser Middleware
- User Registration API

## Installation

```bash
npm install
```

## Run

```bash
node server.js
```

Server:

```
http://localhost:3000
```

## API

POST

```
http://localhost:3000/users/register
```

Example Body

```json
{
  "name": "Tahreem",
  "email": "tahreem@gmail.com",
  "age": 22
}
```