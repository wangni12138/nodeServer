const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const Article = sequelize.define("Article",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // authorID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        viewNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        likeNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // tagID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
        // comment:{
        //     type:DataTypes.
        // }
    },
    {
        paranoid: true
    }
)

module.exports = Article