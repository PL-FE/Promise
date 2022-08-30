const promise = require("./promise.js"); // 不支持异步
new promise((resolve, reject) => {
  JSON.parse("{sds}");
  setTimeout(() => {
    resolve(2);
  }, 1000);
})
  .catch((err) => {
    console.log("err11111", err);
  })
  .finally((res) => {
    console.log("res", res);
  });
