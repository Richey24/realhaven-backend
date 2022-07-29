const express = require("express");
const { userRoute, houseRoute } = require("./route/route");
const dotenv = require("dotenv");
const cors = require("cors");
const mysql = require("mysql2");

dotenv.config({ path: "./environ/.env" });

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  mysql.createConnection(process.env.DATABASE_URL);
  console.log(`server listening at port ${port}`);
});

// all the user route
app.use("/user", userRoute);
// all the house route
app.use("/house", houseRoute);
// serving static files
app.use("/image", express.static(__dirname + "/../rh_backend/files"));
