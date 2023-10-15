const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    courseId: { type: String },
    name: { type: String },
    syllabus: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);