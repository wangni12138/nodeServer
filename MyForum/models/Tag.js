const sequelize = require('./db');
const { DataTypes } = require('sequelize')

const Tag = sequelize.define("Tag",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        paranoid: true
    }
)

module.exports = Tag