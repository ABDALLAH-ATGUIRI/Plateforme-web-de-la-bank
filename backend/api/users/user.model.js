const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const usersSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    birth: {
      type: Date,
      required: true
    },
    cin: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: false
    },
    phone: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    accept: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true
    }
  },
  { timestamps: true }
);

const Users = mongoose.model("users", usersSchema);
module.exports = { Users };
