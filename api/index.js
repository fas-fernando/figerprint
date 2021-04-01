const express = require("express");
const cors = require('cors')
const handlebars = require("express-handlebars");
const Sequelize = require('sequelize');
const bodyParser = require("body-parser");
const Paciente = require("./models/Paciente");
const app = express();
app.use(cors())


// Config:

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexão com o Banco de Dados MySQL
const sequelize = new Sequelize('sistemaCadastro', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});

// Rotas
app.get("/", function(req, res) {
    Paciente.findAll().then((pacientes) => {
        res.json(pacientes);
    });
});

app.post("/paciente", function(req, res) {
    Paciente.create({
        nome: req.body.nome,
        idade: req.body.idade,
        teste: req.body.teste
    }).then(function() {
        res.redirect("/");
    }).catch(function(erro) {
        res.send(`Houve um erro: ${erro}`);
    });
});

app.get("/:id", function(req, res) {
    Paciente.destroy({
        where: {
            "id": req.params.id
        }
        .then(function() {
            res.send("Paciente apagado com sucesso!")
        })
        .catch(function(erro) {
            res.send("Este paciente não existe!")
        })
    })
});

// Iniciando Servidor Local
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081");
});