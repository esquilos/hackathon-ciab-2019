const mongoose = require('mongoose');

const Renegociacao = new mongoose.Schema({
    emprestimo_renegociado : {
        type : mongoose.Schema.Types.ObjectId, ref:"Emprestimo",
        required : true
    },
    motivo_renegociacao : {
        type : String,
        required : true
    },
    descricao :{ 
        type : String,
        required : true
    },
    perfil_linkedin : {
        firstName: {
            localized: {
                pt_BR: {
                    type: 'String'
                }
            },
            preferredLocale: {
                country: {
                    type: 'String'
                },
                language: {
                    type: 'String'
                }
            }
        },
        localizedFirstName: {
            type: 'String'
        },
        headline: {
            localized: {
                pt_BR: {
                    type: 'String'
                }
            },
            preferredLocale: {
                country: {
                    type: 'String'
                },
                language: {
                    type: 'String'
                }
            }
        },
        localizedHeadline: {
            type: 'String'
        },
        vanityName: {
            type: 'String'
        },
        id: {
            type: 'String'
        },
        lastName: {
            localized: {
                pt_BR: {
                    type: 'String'
                }
            },
            preferredLocale: {
                country: {
                    type: 'String'
                },
                language: {
                    type: 'String'
                }
            }
        }
    }
},{
    timestamps : true
});

module.exports = mongoose.model('Renegociacao',Renegociacao);