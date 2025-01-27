const { sendEmail } = require("../services/email-service.js");

const sendEmailHandler = async (req, res) => {
  const { nome, email, telefone, preferencia, projeto } = req.body;

  try {
    await sendEmail({ nome, email, telefone, preferencia, projeto });
    res.status(200).send("E-mail enviado com sucesso!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Falha ao enviar email.");
  }
};

module.exports = { sendEmailHandler };
