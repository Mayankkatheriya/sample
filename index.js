const http = require("http");

const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  if(req.url === "/product") {
    res.end("Product Page");
  }

  // Send the response body
  res.end("Hello, World!\n");
});

server.listen(5000, () => {
  console.log("Server listening on port 3000");
});
