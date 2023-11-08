const sequelize = require('./db')
const { DataTypes } = require("sequelize")

const Follow = sequelize.define('Follow',
    {
        followAuthorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        paranoid: true,
    }
)

module.exports = Follow