const mysql = require("mysql2");

const getAllProp = (req, res) => {
  const getAllQuery = "SELECT * FROM house";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(getAllQuery, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  mysql.createConnection(process.env.DATABASE_URL).end();
};

module.exports = getAllProp;
