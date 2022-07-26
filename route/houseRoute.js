const express = require("express");
const getAllProp = require("../controller/houseController/getAllProp");
const getAllUserProp = require("../controller/houseController/getAllUserProp");
const getById = require("../controller/houseController/getById");
const postProp = require("../controller/houseController/postProp");
const upload = require("../utils/multer");

const houseRoute = express.Router();

// posting property
houseRoute.post("/post", upload.array("image", 6), postProp);
// getting all properties associated to a user
houseRoute.post("/user/get", getAllUserProp);
// getting a particular property by its ID
houseRoute.get("/get/one/:id", getById);
// getting all properties
houseRoute.get("/get/all", getAllProp);

module.exports = houseRoute;
