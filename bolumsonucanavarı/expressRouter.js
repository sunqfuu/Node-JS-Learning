console.log(__dirname);

//Express
const express = require("express");
const app = express();

//Express Router
const router = express.Router();

//Router
const port = 4444;

//FileSystem module
const fs = require("fs");
const path = require("path");

//Pages
const indexPage = "./index.html";
const loginPage = "./login.html";
const registerPage = "./register.html";
const notfoundPage = "./notfound.html";

//Homepage
router.get("/", (request, response) => {
  // response.send("Hellow Knight");

  fs.readFile(indexPage, (err, data) => {
    if (err) throw err;
    response.end(data);
  });
});

//Login
router.get("/login", (request, response) => {
  // response.send("Login Page");

  fs.readFile(loginPage, (err, data) => {
    if (err) throw err;
    response.end(data);
  });
});

//Register
router.get("/register", (request, response) => {
  // response.send("Register Page");

  fs.readFile(registerPage, (err, data) => {
    if (err) throw err;
    response.end(data);
  });
});

// 404 notfound
app.use((request, response, next) => {
  // response.send("404 Page Not Found");

  fs.readFile(notfoundPage, (err, data) => {
    if (err) throw err;
    response.end(data);
  });
});

//Router
app.use("/", router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
