console.log(__dirname);

//ServerObject
const serverObject = {
  port: 4444,
  host: "localhost",
  status: { ok: 200, notFound: 404, created: 201, noContent: 204 },
};

//File Name
const fileName = "index.html";

//HTML Object
const html = `
<html>
<head>
<title>Node.JS Document Server</title>
</head>
<body>
<h1>Node.JS Document Server Created by sunqfu</h1>
</body>
</html>
`;

// HTTP Module
const http = require("http");

// Module File System
const fs = require("fs");

// Server Instance
const server = http.createServer((request, response) => {
  console.log("Server Create Working");

  //Header
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  // File Read
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      response.end(data);
    }
  });

  //END
  //   response.write("<h1><b><mark>Helloğ</b></h1></mark>");
  // response.write(html);
  // response.end();
});
//Server
server.listen(serverObject.port, () => {
  console.log(
    `Server is running on http://${serverObject.host}:${serverObject.port}`
  );
});
