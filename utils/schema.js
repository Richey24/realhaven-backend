const mysql = require("mysql2");

const createHouseTable = "UPDATE house SET images = ? WHERE Id = ?";

const createTable = () => {
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(
      createHouseTable,
      [
        "1658751888098image 5 (6).png,1658751888108image 5 (5).png,1658751888120Rectangle 307.png,1658751888126image 5 (2).png,",
        1,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
};

module.exports = { createTable };
