const Mock = require("mockjs")

const result = Mock.mock({
    "data|8": [
        {
            "id|+1": 1,
            "name|1": ["娱乐", "新闻", "精选", "影视", "动漫", "体育", "话题", "故事"],
            description: "@cparagraph(1, 10)",
            "imgUrl": ["@image(50x50, @color, #fff,@clast)"],
        }
    ]
}).data
const Tag = require("../models/Tag")
Tag.bulkCreate(result)