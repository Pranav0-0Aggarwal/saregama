const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Staff = new Schema(
  {
    name: {
      type: String,
    },
    id: {
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
    },
    role: {
      type: String,
    },
    roleId: {
      type: String,
    },
    salary:{
        type:String,
    },
    dateOfJoining:{
        type:String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", Staff);