const Mock = require("mockjs")

const result = Mock.mock({
    "data|20": [
        {
            "id|+1": 1,
            "followAuthorId|1-10": 1,
            "UserId|1-10": 1
        }
    ]
}).data

const Follow = require("../models/Follow")
Follow.bulkCreate(result)