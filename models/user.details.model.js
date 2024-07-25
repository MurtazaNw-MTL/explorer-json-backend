const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user = new Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

let UserSchema = mongoose.model("user_details", user);
module.exports = UserSchema;
