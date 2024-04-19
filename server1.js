// 19/04 - Criação do primeiro server web com node.js
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Efetuando pedido!\n");
});
server.listen(3000, "localhost", () => {
  console.log("Servidor no ar!");
});
