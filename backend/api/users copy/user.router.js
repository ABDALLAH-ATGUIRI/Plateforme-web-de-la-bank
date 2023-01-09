const UserController = require("./user.controller.js");
const express = require("express");
const auth = require("../../middleware/userTokenMiddlware.js");
const router = express.Router();

router.post("/signIn", UserController.createUser);
router.post("/logIn", UserController.login);
// router.get("/", UserController.getAllUsers);
// router.get("/:id", , UserController.getOneUserByUserId);

module.exports = { router };
