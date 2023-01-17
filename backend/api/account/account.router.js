const express = require("express");
const router = express.Router();
const AccountController = require("./account.controller");
const auth = require("../../middleware/userTokenMiddlware");

router.get(`/`, auth.checkToken, AccountController.GetAllAccounts);
router.post(`/create`, auth.checkToken, AccountController.CreateAcc);
router.post(`/signIn`, auth.checkToken, AccountController.SignToAcc);
router.post(`/retait`, auth.checkToken, AccountController.PullMoney);
router.post(`/me`, auth.checkToken, AccountController.GetMyAccount);

module.exports = { router };
