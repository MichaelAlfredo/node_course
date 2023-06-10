const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to the serve");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("acerca de");
    return response.end();
  }

  response.write(`
        <h1>Not found</h1>
        <p>Esta pagina no se encontró</p>
        <a href="/">Volver a la pagina principal</a>
        `);
  response.end();
});
server.listen(3000);

console.log("Servidor escuchando en el puerto 3000");
