const Mock = require("mockjs")

const result = Mock.mock({
    "data|45": [
        {
            "id|+1": 6,
            title: "@title(6,10)",
            description: "@cparagraph(1, 5)",
            text: "@cparagraph(10, 15)",
            imgUrl: ["@image(2500x400, @color, #fff, @natural)"],
            viewNumber: "0",
            likeNumber: "0",
            "UserId|1-10": 1,
            "TagId|1-8": 1
        }
    ]
}).data

const Article = require("../models/Article")
Article.bulkCreate(result)