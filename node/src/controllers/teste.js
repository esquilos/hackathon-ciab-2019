class TesteController{
    async teste(req,res){
        return res.send("OK!");
    }
}

module.exports = new TesteController();