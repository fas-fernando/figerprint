const express = require("express");
const handlebars = require("express-handlebars");
const Sequelize = require('sequelize');
const bodyParser = require("body-parser");
const Paciente = require("./models/Paciente");
const app = express();

// Config:

// Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
    Paciente.findAll().then(function(pacientes) {
        console.log(pacientes);
        res.render("home", { pacientes: pacientes });
    });
});

app.get("/cadastro", function(req, res) {
    res.render("formulario");
});

app.post("/novo", function(req, res) {
    Paciente.create({
        nome: req.body.paciente,
        idade: req.body.idade,
        teste: req.body.teste
    }).then(function() {
        res.redirect("/");
    }).catch(function(erro) {
        res.send(`Houve um erro: ${erro}`);
    });
});

// Iniciando Servidor Local
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081");
});