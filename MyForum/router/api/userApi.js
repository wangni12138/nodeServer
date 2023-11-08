const express = require('express');
const router = express.Router()
const UserSer = require("../../service/UsersService")
const { asyncHandler } = require(".././getSendResult")
const crypt = require("../../utils/crypt")
const jwt = require(".././jwt")

const imgUrl = "https://www.drupal.org/sites/all/themes/bluecheese/images/icon-w-user.svg"

function getObj(req) {
    return {
        name: req.body.name,
        password: req.body.password || "123456789",
        nickname: req.body.nickname || Math.random().toString(36).slice(-6),
        fancy: req.body.fancy || 0,
        avatarUrl: req.body.avatarUrl || imgUrl,
        backgroundUrl: req.body.backgroundUrl || "",
        description: req.body.description || "",
        sex: req.body.description || 0
    }
}

router.post("/login", asyncHandler(async (req, res) => {
    console.log(req.body.loginName, req.body.password);
    const result = await UserSer.login(req.body.loginName, req.body.password)
    // if(result){
    //     //登录成功
    //     let value  = result.id
    //     //加密id
    //     value = crypt.encrypt(value.toString())
    //     //添加token
    //     jwt.publish(res,undefined,{id:value})
    // }
    return result
}))

router.get("/", asyncHandler(async (req, res) => {
    const page = req.query.page || 1
    const limit = req.query.limit || 10
    const keywords = req.query.keywords || ""
    const sex = req.query.sex || 0
    return await UserSer.getUserAll(page, limit, keywords, sex)
}))

router.get("/whoami", asyncHandler(async (req, res) => {
    return await UserSer.getUserById(req.query.id)
}))

router.post("/", asyncHandler(async (req, res) => {
    const obj = getObj(req)
    return await UserSer.addUser(obj)
}))

router.put("/:id", asyncHandler(async (req, res) => {
    const obj = getObj(req)
    await UserSer.updateUser(req.params.id, req.body)
}))

router.delete("/:id", asyncHandler(async (req, res) => {
    await UserSer.deleteUser(req.params.id)
}))

module.exports = router
