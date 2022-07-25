const express = require("express");
const postProp = require("../controller/houseController/postProp");
const upload = require("../utils/multer");

const houseRoute = express.Router();

houseRoute.post("/post", upload.array("image", 6), postProp);

module.exports = houseRoute;
