var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({
//   extended: false;
// }))

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/test', (req, res) => {
  res.send('Hello TESTING 1234!');
});

app.get('/users/:user', (req, res) => {
  res.send('This is data for user: ' + req.params.user);
});

app.post('/test', (req, res) => {
  console.log("req.body", req.body);
  res.end('ended');
});

// Listening on the port 3000
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});