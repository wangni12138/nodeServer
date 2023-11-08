const Mock = require("mockjs")

const result = Mock.mock({
    "data|10": [
        {
            "id|+1":1,
            username:"@name",
            "password":"123456789" ,
            "role":"@name",
            "status":"@name"
        }
    ]
}).data
const Users = require("../models/Account")
Users.bulkCreate(result)