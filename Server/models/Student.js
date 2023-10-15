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
      type: string,
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
    depId: {
      type: mongoose.Types.ObjectID,
      ref: "Department",
    },
    sem: {
      type: Number,
    },
    CGPA: {
      type: float,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", Student);
