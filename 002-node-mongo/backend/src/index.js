const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8000;

const Todo = require('./models/todo');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();

  return res.status(200).json({
    todos
  });
});

app.post('/todos', async (req, res) => {
  const name = req.body.name;
  const todo = new Todo({
    name
  });

  await todo.save();

  res.status(201).json({ message: 'Goal saved', todo });
});

app.put('/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.completed = !todo.completed;

  await todo.save();

  return res.status(201).json({ message: 'Todo saved', todo });
});

app.delete('/todo/:id', async (req, res) => {
  await Todo.deleteOne({
    id: req.params.id
  });

  return res.status(201).json({ message: 'Todo created' });
});

mongoose.connect(
  'MONGO_URI',
  {
    userNewUrlParser: true,
    userUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log('Unable to connect to MongoDB');
      console.log(err);
    } else {
      console.log('Connected to MongoDB');

      app.listen(PORT, () => {
        console.log('Now listening to PORT:', PORT);
      })
    }
  }
);

