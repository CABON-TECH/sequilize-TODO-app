# Todo API

This is a simple RESTful API with sequelize for managing todos. It allows you to perform CRUD (Create, Read, Update, Delete) operations on todos.

## Features

- Get all todos
- Create a new todo
- Mark a todo as completed
- Delete a todo

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL (or any other supported database)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- PostgreSQL (or any other supported database) installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CABON-TECH/sequilize-TODO-app.git
### 1 Install dependencies:

```bash
npm install
```

### 2 Set up database configuration:
Make sure your PostgreSQL database is running.
Configure your database connection in config/config.json.
### 3 Run migrations:
```bash
npx sequelize-cli db:migrate
```
### 4 Start the server:
```bash
node server.js
```
# API Endpoints
### Get all todos
```bash
GET /todos
```
### Create a new todo
```bash
POST /todos
```
#### Request Body:

```json
Copy code
{
  "title": "Your todo title here"
}
```
### Mark a todo as completed
```bash
PUT /todos/:id
```
### Delete a todo
```bash
DELETE /todos/:id
```
### License
```
This project is licensed under the MIT License - see the LICENSE file for details.
```
