const mysql = require("mysql2");
const argon2 = require("argon2");

const login = async (req, res) => {
  const { email, password } = req.body;
  const loginQuery = "SELECT * FROM user WHERE email = ?";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(loginQuery, [email], async (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: err });
      } else {
        // checking if a user is found with that email
        if (result.length < 1) {
          res.status(404).json({ message: "No User Found With This Email" });
          return;
        }
        // destructuring the result from the array
        const [user] = result;
        // verify the password by comparing the hashed passoword from the database with the password enter by the user
        const verify = await argon2.verify(user.password, password);
        if (verify) {
          // destructuring the password out of the result
          const { password, ...mainUser } = user;
          res.status(200).json(mainUser);
          return;
        } else {
          res.status(401).json({ message: "Incorrect Password" });
        }
      }
    });
  mysql.createConnection(process.env.DATABASE_URL).end();
};

module.exports = login;
