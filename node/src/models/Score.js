const mongoose = require('mongoose');

const Score = new mongoose.Schema({
    cpf : {
     type : String,
     required : true   
    },
    score : {
        type : Number,
        required : true
    }
},{
    timestamps : true
});

module.exports = mongoose.model('Score',Score);