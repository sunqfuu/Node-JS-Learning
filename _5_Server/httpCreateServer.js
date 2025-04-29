console.log(__dirname);

// Server Object
const serverObject = {
  name: "localhost",
  port: 3000,
};

// HTTP Module
const http = require("http");

// Server
const server = http.createServer((request, response) => {
  console.log("HTTP Server Created");

  // Port Listen
  server.listen(serverObject.port, () => {
    console.log(`Server is running on http://${serverObject.port}`);
  });

  //Request Server
  console.log(request);
  console.log(request.url);

  // Response Server
  console.log(response);

  // Header

  // Response End
  response.end("<h1>Node.JS HTTP Server Created</h1>");
});
