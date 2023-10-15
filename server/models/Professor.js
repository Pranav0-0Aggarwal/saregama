const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Proffessor = new Schema({
    courseId:mongoose.Types.ObjectId, ref: "Course",
    office:{
        type:String
    },
    Qualifications:{
        type:String
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Proffessor',Proffessor);