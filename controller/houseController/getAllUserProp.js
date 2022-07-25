const mysql = require("mysql2");

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
        const [house] = result;
        res.status(200).json(house);
      }
    });
};

module.exports = getAllUserProp;
