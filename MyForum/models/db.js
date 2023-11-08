const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("react_database", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: null
})

module.exports = sequelize