const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Parent = new Schema(
  {
    name: {
      type: String,
    },
    occupation: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    address: {
      type: String,
    },
    gender:{
        type:String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Parent", Parent);