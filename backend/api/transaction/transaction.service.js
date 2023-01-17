const transactionModel = require("./account.model");

module.exports = {
  create: (data) => {
    return transactionModel.Transactions.create(data);
  }
};
