const express = require("express");
const cors = require('cors')
const Sequelize = require('sequelize');
const bodyParser = require("body-parser");
const Paciente = require("./models/Paciente");
const app = express();
app.use(cors())


// Config:

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", function(req, res) {
    Paciente.findAll().then((pacientes) => {
        res.json(pacientes);
    });
});

app.post("/", function(req, res) {
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

app.delete("/:id", function(req, res) {
    Paciente.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send(`Paciente excluido com sucesso`)
    })
});

app.put("/", function(req, res) {
    Paciente.update({
        nome: req.body.nome,
        idade: req.body.idade,
        teste: req.body.teste
    }, {
        where: { id: req.body.id }
    }).then(() => {
        res.send("sucesso");
    })
})

// Iniciando Servidor Local
app.listen(3000, () => {
    console.log("Servidor rodando na url http://localhost:3000");
});