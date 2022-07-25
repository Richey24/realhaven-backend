const mysql = require("mysql2");

const getById = (req, res) => {
  const { id } = req.params;
  const getPropQuery = "SELECT * FROM house WHERE id = ?";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(getPropQuery, [id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        const [house] = result;
        res.status(200).json(house);
      }
    });
};

module.exports = getById;
