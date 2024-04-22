// * Abrir pasta que contém Html e executar através de estrutura de decisão alguma página selecionada (sistema de rotas simples).
const http = require("http");
const fs = require("fs");

const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.end();
});
server.listen(port, host, () => {
  console.log("Servidor em execução");
});
