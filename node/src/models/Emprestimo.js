const mongoose = require('mongoose');

const Emprestimo = new mongoose.Schema({
    cpf : {
     type : String,
     required : true   
    },
    valor : {
        type : Number,
        required : true
    },
    n_parcelas : {
        type : Number,
        required : true
    },
    n_parcelas_paga : {
        type : Number,
        required : true
    },
    valor_parcelas_juros : { 
        type: Number,
        required : true
    },
    data_primeiro_pagamento : {
        type : Date,
        required : true
    },
    data_ultimo_pagamento : {
        type : Date,
    },
    data_vencimento_proximo : {
        type : Date
    }
},{
    timestamps : true
});

module.exports = mongoose.model('Emprestimo',Emprestimo);