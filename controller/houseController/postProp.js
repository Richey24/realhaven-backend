const mysql = require("mysql2");

const postProp = (req, res) => {
  const {
    email,
    title,
    address,
    purpose,
    propType,
    bedroom,
    bathroom,
    toilet,
    status,
    price,
    currency,
    rate,
    description,
    features,
  } = req.body;
  let imageName = "";
  for (let i = 0; i < req.files.length; i++) {
    imageName += req.files[i].filename + ",";
  }
  const postQuery =
    "INSERT INTO house (email, title, address, purpose, property_type, no_of_bedroom, no_of_bathroom, no_of_toilet, state, price, currency, period, description, features, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  mysql
    .createConnection(process.env.DATABASE_URL)
    .query(
      postQuery,
      [
        email,
        title,
        address,
        purpose,
        propType,
        bedroom,
        bathroom,
        toilet,
        status,
        price,
        currency,
        rate,
        description,
        features,
        imageName,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  mysql.createConnection(process.env.DATABASE_URL).end();
};

module.exports = postProp;
