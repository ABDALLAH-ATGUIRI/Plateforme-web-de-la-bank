const express = require("express");
const router = express.Router();
const TransactionController = require("./transaction.controller");
const auth = require("../../middleware/userTokenMiddlware");

router.get(`/transaction`, auth.checkToken, TransactionController.Transfer);

module.exports = { router };