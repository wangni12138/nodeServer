const express = require('express');
const router = express.Router()
const articleSer = require("../../service/ArticleService")
const { asyncHandler } = require("../getSendResult")

//添加一篇文章
router.post(
    "/",
    asyncHandler(async (req) => {
        return await articleSer.addArticle(req.body)
    })
)

//删除一篇文章
router.delete(
    "/:id",
    asyncHandler(async (req) => {
        return await articleSer.deleteArticle(req.params.id)
    })
)

//修改一篇文章
router.put(
    "/:id",
    asyncHandler(async (req) => {
        return await articleSer.updateArticle(req.params.id, req.body)
    })
)

//获取单个文章
router.get(
    "/:id",
    asyncHandler(async (req) => {
        return await articleSer.getArticleById(req.params.id)
    })
)

//分页获取文章
router.get(
    "/",
    asyncHandler(async (req) => {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const keywords = req.query.keywords || ""
        const tagId = req.query.tagId || 0
        const userId = req.query.userId || 0
        return await articleSer.getArticleAll(page, limit, keywords, tagId, userId)
    })
)

module.exports = router