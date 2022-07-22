const mysql = require("mysql2");
const argon2 = require("argon2");

const register = async (req, res) => {
  const { fullname, email, phone, password } = req.body;
  const hashPass = await argon2.hash(password);
  const registerQuery =
    "INSERT INTO user (email, fullname, phone, password) VALUES (?, ?, ?, ?)";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(registerQuery, [email, fullname, phone, hashPass], (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json(result);
      }
    });
};

module.exports = register;
