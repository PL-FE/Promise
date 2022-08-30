const promise1 = require("./promise1.js"); // 不支持异步
new promise1((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((res) => {
    console.log("res", res);
    return new promise1((resolve, reject) => {
      setTimeout(() => {
        resolve(12);
      }, 1000);
    });
  })
  .then((res) => {
    console.log("res2", res);
  });
