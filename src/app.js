const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const emailRoutes = require("./routes/email-routes.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Rota de teste para a URL raiz
app.get("/", (req, res) => {
  res.send("API de envio de e-mails está funcionando!");
});

app.get("/env-test", (req, res) => {
  res.json({
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
  });
});

// Registrar rotas
app.use("/api", emailRoutes);

module.exports = app;
