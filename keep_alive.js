var http = require('http');

// Use a porta fornecida pela variável de ambiente PORT ou 8080 como padrão
const port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
