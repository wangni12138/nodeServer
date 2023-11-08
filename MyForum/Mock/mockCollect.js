const Mock = require("mockjs")

const result = Mock.mock({
    "data|30": [
        {
            "id|+1": 1,
            "collectArticleId|1-50": 1,
            "UserId|1-10": 1,
        }
    ]
}).data

const Collect = require("../models/Collect")
Collect.bulkCreate(result)