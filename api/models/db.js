const Sequelize = require("sequelize");

// Conexão do Banco de Dados MySQL
const sequelize = new Sequelize("pacientes", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};