const mysql = require("mysql2");

const createHouseTable =
  "ALTER TABLE `house` ADD COLUMN Id int NOT NULL AUTO_INCREMENT PRIMARY KEY";

const createTable = () => {
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(createHouseTable, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
};

module.exports = { createTable };
