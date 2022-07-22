const mysql = require("mysql2");

const createUserTable =
  "CREATE TABLE IF NOT EXISTS `user` (`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, `email` varchar(255) NOT NULL, `fullname` varchar(255), `phone` varchar(255), `password` varchar(255))";
const createHouseTable =
  "CREATE TABLE IF NOT EXISTS `house` ( `email` varchar(255) NOT NULL, `title` varchar(255), `purpose` varchar(255), `property_type` varchar(255), `no_of_bedroom` int, `no_of_bathroom` int, `no_of_toilet` int, `state` varchar(255), `price` int, `currency` varchar(255), `period` varchar(255), `descripton` varchar(255), `features` varchar(255), `image1` varchar(255), `image2` varchar(255), `image3` varchar(255), `image4` varchar(255), `image5` varchar(255))";

const createTable = () => {
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(createUserTable, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });

  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(createHouseTable, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
};

module.exports = { createTable };
