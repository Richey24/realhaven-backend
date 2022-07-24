const express = require("express");
const deleteUser = require("../controller/deleteUser");
const getUser = require("../controller/getUser");
const login = require("../controller/login");
const register = require("../controller/register");

const userRoute = express.Router();

userRoute.post("/get", getUser);
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.post("/delete", deleteUser);
module.exports = userRoute;
