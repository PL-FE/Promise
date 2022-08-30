const promise1 = require("./promise.js"); // 不支持异步
new promise1((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
}).then((res) => {
  console.log("res", res);
});
