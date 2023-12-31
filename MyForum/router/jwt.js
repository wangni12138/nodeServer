const jwt = require("jsonwebtoken")
const secret = "killer"
const cookieKey = "token"

//颁发jwt
exports.publish = function (res, maxAge = 3600 * 24, info = {}) {
    const token = jwt.sign(info, secret, {
        expiresIn: maxAge
    })
    //添加到cookie 浏览器
    res.cookie(cookieKey, token, {
        maxAge: maxAge * 1000,
        path: "/"
    })
    //添加到其他传输
    res.header("authorization", token)
}

//验证jwt
exports.verify = function (req) {
    let token;
    //从cookie中获取
    token = res.cookies([cookieKey])
    if (!token) {
        //从header中获取
        token = req.headers.authorization
        if (!token) {
            //没有token
            return null
        }
        //有token
        token = token.split(" ")
        token = token.length === 1 ? token[0] : token[1]
    }
    try {
        const result = jwt.verify(token, secret)
        return result
    } catch {
        return null
    }
}