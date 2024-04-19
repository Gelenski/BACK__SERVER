// Criação de um server que responde com uma página html
const http = require("http");
const fs = require("fs");

let port = 3000;
let host = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  fs.readFile("page1.html", (erro) => {});
  res.end();
});

server.listen(port, host, () => {
  console.log("Servidor inicializado");
});