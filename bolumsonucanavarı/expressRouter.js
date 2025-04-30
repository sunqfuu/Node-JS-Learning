console.log(__dirname);

//Express
const express = require("express");
const app = express();

//Router
const port = 4444;

//FileSystem module
const fs = require("fs");

//Pages
const indexPage = "./index.html";
const loginPage = "./login.html";
const registerPage = "./register.html";
const notFoundPage = "./notfound.html";

//Express Router
const router = express.Router();

//Homepage
router.get("/", (request, response) => {
  response.send("Hellow Knight");

  fs.readfile(indexPage, (err, data) => {
    if (err) throw err;
    response.end(data);
  });
});

//Login
router.get("/login", (request, response) => {
  response.send("Login Page");
});

//Homepage
router.get("/register", (request, response) => {
  response.send("Register Page");
});

//Router
app.use("/", router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
