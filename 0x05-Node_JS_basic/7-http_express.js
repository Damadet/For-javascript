const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const heading = 'This is the list of our students\n';
  try {
    const students = await countStudents(args[0]);
    res.send(`${heading}${students.join('\n')}`);
  } catch (error) {
    res.send(`${heading}${error.message}`);
  }
});

app.listen(port);

module.exports = app;