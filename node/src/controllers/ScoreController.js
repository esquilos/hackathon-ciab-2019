const Score = require("../models/Score");

class ScoreController{
    
    async setScore(req,res){
        const score = await Score.create(req.body);
        return res.json(score);
    }
    async getScore(req,res){
        const cpf = req.query.cpf;
        const score = await Score.findOne({cpf});  
        return res.json(score);
    }

}

module.exports = new ScoreController();