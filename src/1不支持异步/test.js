const promise1 = require("./promise1.js"); // 不支持异步
new promise1((resolve, reject) => {
  resolve(1);
}).then((res) => {
  console.log("res", res);
});
