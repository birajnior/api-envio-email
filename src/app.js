const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const emailRoutes = require("./routes/email-routes.js");

const app = express();

// Configuração do CORS
const corsOptions = {
  origin: ["http://localhost:3000", "https://api-envio-email.vercel.app"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Middleware para interpretar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota de teste para a URL raiz
app.get("/", (req, res) => {
  res.send("API de envio de e-mails está funcionando!");
});

// Registrar rotas
app.use("/api", emailRoutes);

module.exports = app;
