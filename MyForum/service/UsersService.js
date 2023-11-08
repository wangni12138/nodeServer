const Users = require("../models/Users")
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

exports.getUserAll = async function (page = 1, limit = 10, keywords = "", sex = 0) {
    let where = {
        [Op.or]: {
            nickname: {
                [Op.like]: `%${keywords}%`
            }
        }
    }
    if (sex) {
        where.sex = sex
    }

    const result = await Users.findAndCountAll({
        where,
        offset: (page - 1) * limit,
        limit: +limit
    })

    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}