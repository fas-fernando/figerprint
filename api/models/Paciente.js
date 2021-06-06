const db = require("./db");

const Paciente = db.sequelize.define("pacientes", {
    nome: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    teste: {
        type: db.Sequelize.INTEGER
    }
});

// Paciente.sync({ force: true });

module.exports = Paciente;