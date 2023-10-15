const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepartmentAudit = new Schema(
  {
    message: {
      type: String,
    },
    depId: {
      type: String,
    },
    techStaff: {
      type: mongoose.Types.ObjectID,
      ref: "TechStaff",
    },
    parentAuditId:{
        type:mongoose.Types.ObjectID,
        ref:"DepartmentAudit",
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

module.exports = mongoose.model("DepartmentAudit", DepartmentAudit);