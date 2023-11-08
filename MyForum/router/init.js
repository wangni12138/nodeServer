const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const app = express();

// const option = {
//     key: fs.readFileSync("/etc/letsencrypt/live/killerqueen.ru/privkey.pem"),
//     cert: fs.readFileSync("/etc/letsencrypt/live/killerqueen.ru/fullchain.pem"),
// }

// const sslServer = https.createServer(option, app);

const prot = 1032

app.listen(prot, () => {
    console.log(`端口${prot}正在监听`)
})

//处理跨域
app.use(
    cors({
        origin(origin, callback) {
            if (!origin) {
                callback(null, "*")
                return
            }
            callback(null, origin)
        },
        credentials: true
    })
)

//解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }))
//解析 application/json 格式的请求体
app.use(express.json())

//处理api请求
// app.use("/api/article", require("./api/articleApi"))
// app.use("/api/user", require("./api/userApi"))
// app.use("/api/tag", require("./api/tagApi"))
app.use("/api/account",require("./api/AccountApi"))

//处理错误的中间件
app.use(require("./errorMiddleware"))