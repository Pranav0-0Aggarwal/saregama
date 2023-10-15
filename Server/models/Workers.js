const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Workers = new Schema({
    work:{
        type:String
    },
    location:{
        type:String
    },
},{
    timestamps: true
});

module.exports = mongoose.model('Workers',Workers);