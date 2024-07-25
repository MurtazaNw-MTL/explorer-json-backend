const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let admin = new Schema({
  bitcoin: {
    type: Array,
    default: []
  },
  ethereum: {
    type: Array,
    default: []
  }
});

let AdminSchema = mongoose.model("table", admin);
module.exports = AdminSchema;
