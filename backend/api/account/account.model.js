const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const operationHistory = new Schema({
  operationType: {
    type: String,
    enum: ["ajoute", "retait"]
  },
  balance: {
    type: Number,
    required: true
  },
  operationDate: {
    type: Date,
    required: true
  }
});

const Account = mongoose.model(
  "Account",
  new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    reference: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["etudiant", "salarié", "entrepreneur"]
    },
    balance: {
      type: Number,
      required: true,
      default: 1000
    },
    Status: {
      type: Boolean,
      default: true
    },
    history: [operationHistory]
  })
);
module.exports = Account;
