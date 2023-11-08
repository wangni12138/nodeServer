const Mock = require("mockjs")

const result = Mock.mock({
    "data|10": [
        {
            "id|+1": 1,
            "name": "@cname",
            nickname: "@cname",
            password: "123456789",
            "sex|1-2": true,
            fancy: "0",
            "avatarUrl|1": [
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
            ],
            "backgroundUrl": ["@image(300x250, @color, #fff, @natural)"],
            description: "@cparagraph(1, 10)",
        }
    ]
}).data
const Users = require("../models/Users")
Users.bulkCreate(result)