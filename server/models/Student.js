const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
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
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    year: {
      type: String,
    },
    depId: {
      type: mongoose.Types.ObjectId,
      ref: "Department",
    },
    sem: {
      type: Number,
    },
    CGPA: {
      type: mongoose.Types.Decimal128,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", Student);