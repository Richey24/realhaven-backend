const mysql = require("mysql2");
const argon2 = require("argon2");

const register = async (req, res) => {
  const { fullname, email, phone, password } = req.body;
  const hashPass = await argon2.hash(password);
  const registerQuery =
    "INSERT INTO user (email, fullname, phone, password) VALUES (?, ?, ?, ?)";
  const checkQuery = "SELECT * FROM user WHERE email = ?";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(checkQuery, [email], (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      } else if (result.length === 0) {
        mysql
          .createConnection(process.env.DATABASE_URL)
          .query(
            registerQuery,
            [email, fullname, phone, hashPass],
            (err, result) => {
              if (err) {
                res.status(500).json({ message: err });
                return;
              } else {
                res.status(200).json(result);
              }
            }
          );
      } else {
        res.status(203).json({ message: "User already registered" });
      }
    });
  mysql.createConnection(process.env.DATABASE_URL).end();
};

module.exports = register;
