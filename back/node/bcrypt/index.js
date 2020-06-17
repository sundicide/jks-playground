var bcrypt = require("bcrypt");

// 매번 실행할때마다 값이 달라진다.
bcrypt.hash("1", 10).then(function annonymous(res) {console.log(res)})

bcrypt.compare("1", "$2b$10$pHRfdkWEeMNx0MVCS7ekKe8Zd01oYgxfZpZ6KNM6yrrsYkTaYYfNW")
.then(function annonymous(response) {
  console.log("compare result\t" + response)
})