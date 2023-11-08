const Users = require("../models/Account")
const { Op } = require("sequelize")
const md5 = require("md5")

exports.addUser = async function (obj) {
    obj.password = md5(obj.password)
    const ins = await Users.create(obj)
    return ins.toJSON()
}

exports.deleteUser = async function (id) {

    return await Users.destroy({
        where: {
            id
        }
    })
}

exports.updateUser = async function (id, obj) {
    if (obj.password) {
        obj.password = md5(obj.password)
    }
    await Users.update(obj, {
        where: {
            id
        }
    })
}

exports.login = async function (loginName, password) {
    password = md5(password)
    const result = await Users.findOne({
        where: {
            name: loginName,
            password,
        }
    })
    if (result && result.password === password) {
        return result.toJSON()
    }
    return null
}

exports.getUserById = async function (id) {
    const result = await Users.findByPk(id)
    if (result) {
        return result.toJSON()
    }
    return null
}

exports.getUserAll = async function () {
    

    // const result = await Users.findAndCountAll({
    // })
    const result=await Users.findAll();
    return JSON.parse(JSON.stringify(result))
}