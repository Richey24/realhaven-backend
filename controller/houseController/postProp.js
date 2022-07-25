const mysql = require("mysql2");

const postProp = (req, res) => {
  const { email } = req.body;
  console.log(req.theFileName);
  console.log(email);
  res.send("successful");
};

module.exports = postProp;
