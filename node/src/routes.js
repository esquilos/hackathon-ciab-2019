const express = require('express');

const TesteController = require("./controllers/teste")
const EmprestimoController = require("./controllers/EmprestimoController");
const ScoreController = require("./controllers/ScoreController");
const routes = express.Router();

routes.get("/teste",TesteController.teste);

//Emprestimo
routes.post("/realiza/emprestimo",EmprestimoController.cadastraEmprestimo);

//Renegociacao
routes.post("/realiza/renegociacao",EmprestimoController.realizaRenegociacao);

//Score
routes.post("/score",ScoreController.setScore);
routes.get("/score",ScoreController.getScore);
routes.get("/contratos/atrasados/",EmprestimoController.getContratoAtraso);

routes.get("/busca/renegociacao",EmprestimoController.buscaReneg);
module.exports = routes;