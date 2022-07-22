const express = require("express");
const getUser = require("../controller/getUser");
const login = require("../controller/login");
const register = require("../controller/register");

const userRoute = express.Router();

userRoute.post("/get", getUser);
userRoute.post("/register", register);
userRoute.post("/login", login);
module.exports = userRoute;
