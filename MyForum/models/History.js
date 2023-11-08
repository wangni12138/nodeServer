const sequelize = require('./db')
const { DataTypes } = require("sequelize")

const History = sequelize.define('History',
    {},
    {
        paranoid: true,
    }
)

module.exports = History