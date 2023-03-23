const http = require('http');
const countStudents = require('./3-read_file_async')

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url == '/') {
        res.end('Hello Holberton School!');
    }
    else if (req.url == '/students') {
        res.end(`This is the list of our students \n ${countStudents("database.csv")}`)
    }


}).listen(1245);

module.exports = app;