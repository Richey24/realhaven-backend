const mysql = require("mysql2");

// getting all the property associated to a particular user
const getAllUserProp = (req, res) => {
  const { email } = req.body;
  const getPropQuery = "SELECT * FROM house WHERE email = ?";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(getPropQuery, [email], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    });
};

module.exports = getAllUserProp;
