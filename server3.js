// * Abrir pasta que contém Html e executar através de estrutura de decisão alguma página selecionada (sistema de rotas simples).
const http = require("http");
const fs = require("fs");
const { error } = require("console");

const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  // Header.
  res.setHeader("content-type", "text/html");

  // Seleção da Página.
  let html_page = "";
  switch (req.url) {
    case "/":
      html_page = "home.html";
      res.statusCode = 200;
      break;
    case "/home":
      html_page = "home.html";
      res.statusCode = 200;
      break;
    case "/servicos":
      html_page = "servicos.html";
      res.statusCode = 200;
      break;
    case "/sobre":
      html_page = "sobre.html";
      res.statusCode = 200;
      break;
    default:
      html_page = "404.html";
      res.statusCode = 404;
      break;
  }

  // Abertura das páginas Html.
  fs.readFile("./html/" + html_page, (erro, data) => {
    if (erro) {
      console.log(erro);
      res.end;
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(port, host, () => {
  console.log("[SERVER]: Is running on port 3000.");
});
