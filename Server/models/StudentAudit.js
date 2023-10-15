const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentAudit = new Schema(
  {
    message: {
      type: String,
    },
    stuId: {
      type: String,
    },
    techStaff: {
      type: mongoose.Types.ObjectID,
      ref: "TechStaff",
    },
    parentAuditId:{
        type:mongoose.Types.ObjectID,
        ref:"StudentAudit",
    },
    method:{
        type:String,
    },
    oldState:{
        attribute:{
            type:String,
        },
        value:{
            type:String,
        },
    },
    newState:{
        attribute:{
            type:String,
        },
        value:{
            type:String,
        },
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StudentAudit", StudentAudit);
