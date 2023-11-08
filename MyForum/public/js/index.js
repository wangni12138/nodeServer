//简单请求

// fetch("http://localhost:9527/api/student").then(resp => resp.json()).then(resp => {
//     console.log(resp)
// })

// //预检请求
// fetch("http://localhost:9527/api/student", {
//     method: "GET",
//     headers: {
//         "content-type": "application/json",
//         a: 1
//     },
//     credentials: "include"
// }).then(resp => resp.json()).then(resp => {
//     console.log(resp)
// })

login.onclick = function () {
    fetch("/api/admin/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        // body: JSON.stringify({
        //     loginId: "killerqueen",
        //     loginPwd: "killerqueen"
        // }) 
        body: JSON.stringify({
            loginId: "123",
            loginPwd: "123123"
        })
    })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })
}

update.onclick = function () {
    fetch("/api/student/1149", {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: "jojo"
        })
    }).then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })
}