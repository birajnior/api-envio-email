const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const emailRoutes = require("./routes/email-routes.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Registrar rotas
app.use("/api", emailRoutes);

module.exports = app;
