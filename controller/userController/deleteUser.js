const mysql = require("mysql2");

const deleteUser = async (req, res) => {
  const { email } = req.body;
  const deleteQuery = "DELETE FROM user WHERE email = ? LIMIT 1";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(deleteQuery, [email], (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json(result);
      }
    });
};

module.exports = deleteUser;
