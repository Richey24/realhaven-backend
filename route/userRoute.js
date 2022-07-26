const express = require("express");
const deleteUser = require("../controller/userController/deleteUser");
const getUser = require("../controller/userController/getUser");
const login = require("../controller/userController/login");
const register = require("../controller/userController/register");

const userRoute = express.Router();

// getting a single user
userRoute.post("/get", getUser);
// registering a user
userRoute.post("/register", register);
// user authentication and login
userRoute.post("/login", login);
// deleting a user account
userRoute.post("/delete", deleteUser);

module.exports = userRoute;
