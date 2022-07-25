const mysql = require("mysql2");

const createHouseTable =
  "ALTER TABLE `house` ADD (`image6` varchar(255), `address` varchar(255))";

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
