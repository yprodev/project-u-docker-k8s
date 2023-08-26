const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello simple');
});

app.listen(PORT, () => {
  console.log('now running on port:', PORT);
});


