const express = require("express");
const deleteUser = require("../controller/userController/deleteUser");
const getUser = require("../controller/userController/getUser");
const login = require("../controller/userController/login");
const register = require("../controller/userController/register");

const userRoute = express.Router();

userRoute.post("/get", getUser);
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.post("/delete", deleteUser);
module.exports = userRoute;
