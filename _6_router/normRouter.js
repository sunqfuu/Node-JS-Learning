console.log(__dirname);

//Server Object
const serverObject = {
  name: "Server",
  port: 5555,
  host: "localhost",
  statusCode: {
    ok: 200,
    notFound: 404,
    serverError: 500,
  },
};

// HTTP Module
const http = require("http");

// FileSystem Module
const fs = require("fs");

//Pages
const indexPage = "./index.html";
const loginPage = "./login.html";
const registerPage = "./register.html";
const notFoundPage = "./notfound.html";

// HTTP Create
const server = http.createServer((request, response) => {
  //Header
  // response.setHeader('Content-Type', 'text/html', 'charset=utf8');
  response.writeHead(serverObject.statusCode.ok, {
    "Content-Type": "text/html",
    charset: "utf8",
  });

  //Request
  if (request.method === "GET") {
    //Root
    if (http.request === "/" || request.url === "/index") {
      fs.readFile(indexPage, (err, data) => {
        if (err) throw err;
        response.write(data);
      });
      response.write("Homepage");
    } else if (request.url === "/login") {
      response.write("Login Screen");
    } else if (request.url === "/register") {
      response.write("Register Screen");
    } else {
      response.write(serverObject.statusCode.notFound + " Page Not Found");
    }
  }

  response.end();
}); // End Server

//Port
server.listen(serverObject.port, () => {
  console.log(
    `Server is running on port http://${serverObject.host}:${serverObject.port}`
  );
});
