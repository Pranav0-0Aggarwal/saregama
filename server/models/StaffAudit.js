const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StaffAudit = new Schema(
  {
    message: {
      type: String,
    },
    staffId: {
      type: String,
    },
    techStaff: {
      type: mongoose.Types.ObjectID,
      ref: "TechStaff",
    },
    parentAuditId:{
        type:mongoose.Types.ObjectID,
        ref:"StaffAudit",
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

module.exports = mongoose.model("StaffAudit", StaffAudit);