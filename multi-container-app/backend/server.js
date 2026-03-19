const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: 'db',   // IMPORTANT → service name in docker-compose
  user: 'root',
  password: 'password',
  database: 'testdb'
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() as time', (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});