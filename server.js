const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const fs = require('fs');

const { Client } = require('pg')
const client = new Client({
  user: 'user',
  host: 'db',
  database: 'database',
  password: 'password',
  port: 5432,
})


app.use(express.static('client/build'))
app.use('/emoji-search', express.static('client/build'))

app.get('/express_backend', (req, res) => {
  client.query('SELECT * FROM emoji').then(dbres => {
    res.send(dbres.rows);
  })
});

client.connect().then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});

