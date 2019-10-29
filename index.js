/*
 * @Descripttion: es6总结
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-10-28 15:49:41
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-10-29 16:36:34
 */

const timeout = ms =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });

timeout(1000).then(value => {
  console.log(value);
});

const http = require("http");
http
  .createServer((req, res) => {
    if (req.url === "/") {
      timeout(10000).then(value => {
        console.log(value);
      });
    }
    res.end("ok");
  })
  .listen(3000);
console.log("server listen on port 3000");
