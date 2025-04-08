// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.send(`🧮 Sum: ${Number(a) + Number(b)}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  res.send(`🧮 Sum: ${Number(a) - Number(b)}`);
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  res.send(`🧮 Sum: ${Number(a) * Number(b)}`);
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (Number(b) === 0) return res.send("Error: Division by zero");
  res.send(`🧮 Sum: ${Number(a) / Number(b)}`);
});

app.listen(port, () => {
  console.log(`Calculator app running on port ${port}`);
});
