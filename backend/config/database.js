require("dotenv").config();
const mongoose = require("mongoose");
const pool = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on("connected", () => {
    console.log("DB Connected...");
  });
};
module.exports = { pool };
