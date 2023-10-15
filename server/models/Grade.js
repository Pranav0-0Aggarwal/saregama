const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Grade = new Schema(
  {
    sem: {
      type: Number,
    },
    marksList: [
      {
        courseId: {
          type: mongoose.Types.ObjectID,
          ref: "Course",
        },
        grade:{
            type:String,
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Grade", Grade);