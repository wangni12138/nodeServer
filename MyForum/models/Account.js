const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const Users = sequelize.define("Accounts",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        paranoid: true
    }
)
module.exports = Users