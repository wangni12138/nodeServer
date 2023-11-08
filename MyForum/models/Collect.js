const sequelize = require('./db')
const { DataTypes } = require("sequelize")

const Collect = sequelize.define('Collect',
    {
        collectArticleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        paranoid: true,
    }
)

module.exports = Collect