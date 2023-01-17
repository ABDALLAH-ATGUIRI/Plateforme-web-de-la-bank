const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionsSchema = Schema({
  Sender: {
    type: Schema.Types.ObjectId,
    ref: "Account"
  },
  Reciver: {
    type: Schema.Types.ObjectId,
    ref: "Account"
  },
  balance: {
    type: Number,
    required: true
  },
  transactionDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Transactions", TransactionsSchema);
