const mysql = require("mysql2");

const getUser = (req, res) => {
  const { email } = req.body;
  const getOneUser = "SELECT * FROM user WHERE email = ?";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(getOneUser, [email], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: err });
      } else {
        // destructuring the result from the array
        const [user] = result;
        // destructuring the password out of the result
        const { password, ...mainUser } = user;
        res.status(200).json(mainUser);
      }
    });
  mysql.createConnection(process.env.DATABASE_URL).end();
};

module.exports = getUser;
