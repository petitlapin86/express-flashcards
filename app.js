const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>I Love Flashcards!</h1>');
});

app.get('/hello', (req, res) => {
  res.send('<h1>Hello kids!!!</h1>');
});

app.listen(3000, () => {
  console.log('the application is running on localhost:3000!')
});
