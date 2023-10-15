const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Department = new Schema(
  {
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    coursesList: [
      {
        year: {
          type: Number,
        },
        coursesList: [
          {
            type: mongoose.Types.ObjectId,
            ref: "Course",
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", Department);