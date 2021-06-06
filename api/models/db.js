const Sequelize = require("sequelize");

// Conexão do Banco de Dados MySQL
const sequelize = new Sequelize("pacientes", "root", "Admin123$", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};