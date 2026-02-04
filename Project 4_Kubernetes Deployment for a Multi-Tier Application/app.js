const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
app.get("/", (req, res) => {
  db.query(
    'SELECT "Welcome to Kubernetes Deployment!" AS message',
    (err, result) => {
      if (err) {
        res.send("Database connection error: " + err);
      } else {
        res.send(result[0].message);
      }
    },
  );
});
app.listen(port, () => console.log(`App listening on port ${port}`));