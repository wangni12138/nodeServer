const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const Users = sequelize.define("Users",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fancy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatarUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        backgroundUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        paranoid: true
    }
)
module.exports = Users