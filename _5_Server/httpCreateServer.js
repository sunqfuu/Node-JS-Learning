console.log(__dirname);

// Server Object
const serverObject = {
  host: "localhost",
  port: 3333,
  head: { contentType: "Content-Type", charset: "text/plain; charset= utf-8" },
  status: { ok: 200, notFound: 404, created: 201, noContent: 204 },
};

// HTTP Module
const http = require("http");

// Server
const server = http.createServer((request, response) => {
  console.log("HTTP Server Created");

  // Header
  // response.writeHead(200,{
  //   "Content-Type": "text/html; charset=utf-8",
  // });
  // response.writeHead(200, {
  //   "Content-Type": "text/plain; charset=utf-8",
  // });
  // response.writeHead(200,{
  //   "Content-Type": "application/json; charset=utf-8",
  // });

  response.writeHead(serverObject.status.ok, {
    "Content-Type": "text/html; charset=utf-8",
  });

  //Request Server
  console.log("***************** REQUEST ********************");
  // console.log(request);
  // console.log("Request URL" + request.url);
  console.log(request.url);
  console.log(request.headers);
  console.log(request.headers.host);

  // Response Server
  console.log("***************** RESPONSE ********************");
  // console.log(response);
  response.write("<b>Helloğ</b>");

  // Response End
  response.end("<h1>Node.JS HTTP Server Created üşği</h1>");
});

// Port Listen
server.listen(serverObject.port, () => {
  console.log(`Server is running on http://localhost:${serverObject.port}`);
});
