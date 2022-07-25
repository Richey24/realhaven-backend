const express = require("express");
const getAllProp = require("../controller/houseController/getAllProp");
const getAllUserProp = require("../controller/houseController/getAllUserProp");
const getById = require("../controller/houseController/getById");
const postProp = require("../controller/houseController/postProp");
const upload = require("../utils/multer");

const houseRoute = express.Router();

houseRoute.post("/post", upload.array("image", 6), postProp);
houseRoute.post("/user/get", getAllUserProp);
houseRoute.get("/get/one/:id", getById);
houseRoute.get("/get/all", getAllProp);

module.exports = houseRoute;
