const express = require('express');
const router = express.Router()
const tagSer = require("../../service/TagService")
const { asyncHandler } = require("../getSendResult")

router.post("/", asyncHandler(async (req, res) => {
    const obj = {
        name: req.body.name || "",
        description: req.body.description || "",
        imgUrl: req.body.imgUrl || ""
    }
    return await tagSer.addTag(obj)
}))

router.delete("/:id", asyncHandler(async (req, res) => {
    return await tagSer.deleteTag(req.params.id)
}))

router.put("/:id", asyncHandler(async (req, res) => {
    return await tagSer.updateTag(req.params.id, req.body)
}))

router.get("/:id", asyncHandler(async (req, res) => {
    return await tagSer.getTagById(req.params.id)
}))

router.get("/", asyncHandler(async (req, res) => {
    return await tagSer.getTagAll()
}))

module.exports = router