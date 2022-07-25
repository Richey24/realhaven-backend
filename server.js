const express = require("express");
const { userRoute, houseRoute } = require("./route/route");
const dotenv = require("dotenv");
const cors = require("cors");
// const { createTable } = require("./utils/schema");

dotenv.config({ path: "./environ/.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  // createTable();
  console.log(`server listening at port ${port}`);
});

app.use("/user", userRoute);
app.use("/house", houseRoute);
