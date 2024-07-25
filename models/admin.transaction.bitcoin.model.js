const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VinSchema = new mongoose.Schema({
  txid: String,
  vout: Number,

  prevout: {
    scriptpubkey: String,
    scriptpubkey_asm: String,
    scriptpubkey_type: String,
    scriptpubkey_address: String,
    value: Number,
    email: String
  },
  scriptsig: String,
  scriptsig_asm: String,
  witness: [String],
  is_coinbase: Boolean,
  sequence: Number,
  inner_redeemscript_asm: String
});

// Define the schema for the 'vout' array in the JSON
const VoutSchema = new mongoose.Schema({
  scriptpubkey: String,
  scriptpubkey_asm: String,
  scriptpubkey_type: String,
  scriptpubkey_address: String,
  value: Number
});

// Define the main schema for the entire JSON
const transactionSchema = new mongoose.Schema({
  txid: { type: String, unique: true },
  version: Number,
  txsFeeUsd: { type: Number, default: new Number() },
  amtTxsUsd: { type: Number, default: new Number() },
  locktime: Number,
  vin: [VinSchema],
  witness: Boolean,
  vout: [VoutSchema],
  size: Number,
  weight: Number,
  fee: Number,
  status: {
    confirmed: Boolean,
    block_height: Number,
    block_hash: String,
    block_time: String
  },
  freeFields: {
    type: String
  }
});

let Admin_Transaction_Btc_Schema = mongoose.model(
  "admin_btc_txs",
  transactionSchema
);
module.exports = Admin_Transaction_Btc_Schema;
