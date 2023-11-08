// require("./Article")
// require("./Tag")
// require("./Users")
// require("./Follow")
// require("./History")
require("./Account")

const sequelize = require("./db")
sequelize.sync({ alter: true }).then(() => {
    console.log("my forum 模型同步完毕");
})