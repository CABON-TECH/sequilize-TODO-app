const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, Todo } = require('./models');
//const Todo = require('./models/todo');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching todos');
  }
});

// Create a new todo
app.post('/todos', async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = await Todo.create({ title });
    res.json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(400).send('Error creating todo');
  }
});

// Mark a todo as completed
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).send('Todo not found');
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating todo');
  }
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).send('Todo not found');
    }
    await todo.destroy();
    res.send('Todo deleted');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting todo');
  }
});

// Start the server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  await sequelize.authenticate()
  console.log('Database connected')
  
});
