const mongoose = require("mongoose") ;

const Schema = mongoose.Schema;
const usersSchema = new Schema(
  {
    user: {
      type:Schema.Types.ObjectId,
       ref: 'users',
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Users = mongoose.model("users", usersSchema);
module.exports = { Users };

