const Tag = require("../models/Tag")

exports.addTag = async function (obj) {
    const ins = await Tag.create(obj)
    return ins.toJSON()
}

exports.deleteTag = async function (id) {
    return await Tag.destroy({
        where: {
            id
        }
    })
}

exports.updateTag = async function (id, obj) {
    return await Tag.update(obj, {
        where: {
            id
        }
    })
}

exports.getTagById = async function (id) {
    const result = await Tag.findByPk(id)
    if (result) {
        return result.toJSON()
    }
    return null
}

exports.getTagAll = async function () {
    return await Tag.findAll()
}