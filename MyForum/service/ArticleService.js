const Article = require("../models/Article");
const { Op } = require("sequelize")

exports.addArticle = async function (obj) {
    const ins = await Article.create(obj)
    return ins.toJSON()
}

exports.deleteArticle = async function (id) {
    return await Article.destroy({
        where: {
            id
        }
    })
}

exports.updateArticle = async function (id, obj) {
    return await Article.update(obj, {
        where: {
            id
        }
    })
}

exports.getArticleById = async function (id) {
    const result = await Article.findByPk(id)
    if (result) {
        return result.toJSON()
    }
    return null
}

// exports.getArticleByTagId = async function (tagId) {
//     const result = await Article.findAll({
//         where: {
//             TagId: tagId
//         }
//     })
//     if (result) {
//         return result.toJSON()
//     }
//     return null
// }

exports.getArticleAll = async function (page = 1, limit = 10, keywords = "", tagId, userId) {
    let where = {
        [Op.or]:
        {
            title: {
                [Op.like]: `%${keywords}%`
            }
        }
    }

    if (tagId) {
        where.TagId = tagId
    }
    if (userId) {
        where.UserId = userId
    }

    const result = await Article.findAndCountAll({
        attributes: ["id", "title", "imgUrl", "description", "text", "viewNumber", "likeNumber", "TagId", "UserId"],
        where,
        offset: (page - 1) * limit,
        limit: +limit
    })
    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}