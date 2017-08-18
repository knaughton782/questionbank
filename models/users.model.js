const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
var bcrypt = require("bcrypt");

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("questionbanks", usersSchema);
