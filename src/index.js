const app = require("./app.js"); // Importa o app Express

module.exports = (req, res) => {
  return app(req, res); // Chama o app Express para lidar com as requisições
};
