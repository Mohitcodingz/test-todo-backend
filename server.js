const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory array to isolate deployment from MongoDB connection issues
let todos = ['Check frontend deployment', 'Check backend deployment'];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { todo } = req.body;
  if (todo) todos.push(todo);
  res.json({ success: true, todos });
});

// Root route to easily check if the server is alive in the browser
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));