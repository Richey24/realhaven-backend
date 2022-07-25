const mysql = require("mysql2");

const getUser = (req, res) => {
  const { email } = req.body;
  const getOneUser = "SELECT * FROM user WHERE email = ?";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(getOneUser, [email], (err, result) => {
      if (err) {
        console.log(error);
        res.status(500).json({ message: err });
      } else {
        const [user] = result;
        const { password, ...mainUser } = user;
        res.status(200).json(mainUser);
      }
    });
  mysql.createConnection(process.env.DATABASE_URL).end();
};

module.exports = getUser;
