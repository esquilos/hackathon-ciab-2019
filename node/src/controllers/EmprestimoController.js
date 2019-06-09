const Emprestimo = require("../models/Emprestimo");
const Renegociacao = require("../models/Renegociacao");

class EmprestimoController{
    
    async cadastraEmprestimo(req,res){
        const emprestimo = await Emprestimo.create(req.body);
        return res.json(emprestimo);
    }
    async getContratoAtraso(req,res){
        const cpf = req.query.cpf;
        const now = new Date();
        const emprestimo = await Emprestimo
        .find({"cpf":cpf})
        .where("data_vencimento_proximo").lt(now);
        if(emprestimo.length>=2){
            return res.json([]);
        }
        return res.json(emprestimo);
    }
    async realizaRenegociacao(req,res){
        const emprestimo = await Emprestimo.findById(req.body.emprestimo_renegociado);
        const motivo_renegociacao = req.body.motivo_renegociacao;
        const perfil_linkedin = getLinkedinMockado();
        const descricao = req.body.descricao;
        const renegociacao = {
            "emprestimo_renegociado" : emprestimo,
            "motivo_renegociacao" : motivo_renegociacao,
            "descricao":descricao,
            "perfil_linkedin" : perfil_linkedin
        }
        const reneg = await Renegociacao.create(renegociacao);
        return res.json(reneg);
    }
    async buscaReneg(req,res){
        const reneg = await Renegociacao.find({})
        return res.json(reneg);
    }
}

function getLinkedinMockado(){
    return {
        "firstName":{
           "localized":{
              "pt_BR":"Cleiton"
           },
           "preferredLocale":{
              "country":"BR",
              "language":"pt"
           }
        },
        "localizedFirstName": "Cleiton",
        "headline":{
           "localized":{
              "pt_BR":"Desempregado"
           },
           "preferredLocale":{
              "country":"BR",
              "language":"pt"
           }
        },
        "localizedHeadline": "Desempregado",
        "vanityName": "csilva",
        "id":"yrZCpj2Z12",
        "lastName":{
           "localized":{
              "pt_BR":"Silva"
           },
           "preferredLocale":{
              "country":"BR",
              "language":"pt"
           }
        }
     };
}

module.exports = new EmprestimoController();