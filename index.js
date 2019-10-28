/*
 * @Descripttion: es6总结
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-10-28 15:49:41
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-10-28 15:54:24
 */
const http = require('http')
http.createServer((req,res)=>{
    res.end('ok')
}).listen(3000)
console.log('server listen on port 3000')