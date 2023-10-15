const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Head = new Schema({
    depId:{
        type:mongoose.Types.ObjectId, ref: "Department",
    },
    ProfessorId:{
        type:mongoose.Types.ObjectId, ref: "Proffessor",
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Head',Head);