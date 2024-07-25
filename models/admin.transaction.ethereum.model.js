const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  accessList: {
    type: Array,
    default: []
  },
  txsFeeUsd: { type: Number, default: new Number() },
  amtTxsUsd: { type: Number, default: new Number() },
  blockHash: {
    type: String,
    required: true
  },
  blockNumber: {
    type: String,
    required: true
  },
  chainId: {
    type: String,
    required: true
  },
  from: {
    type: String
    // required: true
  },
  gas: {
    type: String,
    required: true
  },
  gasPrice: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true,
    unique: true
  },
  input: {
    type: String,
    required: true
  },
  maxFeePerGas: {
    type: String
    // required: true
  },
  maxPriorityFeePerGas: {
    type: String
  },
  nonce: {
    type: String,
    required: true
  },
  r: {
    type: String
    // required: true
  },
  s: {
    type: String
    // required: true
  },
  to: {
    type: String
    // required: true
  },
  transactionIndex: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  v: {
    type: String
    // required: true
  },
  value: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  },
  confirmations: {
    type: Number,
    required: true
  },
  baseFeePerGas: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  logs: {
    type: Array,
    default: []
  },
  gasUsed: {
    type: String,
    required: true
  },
  internalTxs: {
    type: Array,
    default: []
  },
  freeFields: {
    type: String
  }
});

let Admin_Transaction_Eth_Schema = mongoose.model(
  "admin_eth_txs",
  transactionSchema
);
module.exports = Admin_Transaction_Eth_Schema;
