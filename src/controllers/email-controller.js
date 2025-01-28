const { sendEmail } = require("../services/email-service.js");

const sendEmailHandler = async (req, res) => {
  console.log("Requisição recebida:", req.body);
  const { nome, email, telefone, preferencia, projeto } = req.body;

  try {
    console.time("Envio de e-mail"); // Início do timer
    await sendEmail({ nome, email, telefone, preferencia, projeto });
    console.timeEnd("Envio de e-mail"); // Fim do timer
    res.status(200).send("E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao processar requisição:", error);
    res.status(500).send("Falha ao enviar email.");
  }
};

module.exports = { sendEmailHandler };
