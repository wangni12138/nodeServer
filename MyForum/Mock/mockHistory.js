const Mock = require("mockjs")

const result = Mock.mock({
    "data|20": [
        {
            "id|+1": 1,
            "ArticleId|6-50": 1,
            "UserId|1-10": 1
        }
    ]
}).data

const History = require("../models/History")
History.bulkCreate(result)