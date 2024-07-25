const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let admin = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let AdminSchema = mongoose.model("admin_credentials", admin);
module.exports = AdminSchema;
