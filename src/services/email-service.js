const nodemailer = require("nodemailer");
const { smtpConfig } = require("../config/email-config.js");

const transporter = nodemailer.createTransport({
  ...smtpConfig,
  connectionTimeout: 5000, // Tempo limite de conexão em milissegundos
  greetingTimeout: 5000,
});

const sendEmail = async ({ nome, email, telefone, preferencia, projeto }) => {
  const message = `
    <h3>Novo contato recebido</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Preferência de contato:</strong> ${preferencia}</p>
    <p><strong>Descrição do projeto:</strong></p>
    <p>${projeto}</p>
  `;

  try {
    console.log("Iniciando o envio de e-mail...");
    const response = await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to: "seu-email@exemplo.com", // Substitua pelo seu e-mail
      subject: "Novo contato recebido",
      html: message,
    });
    console.log("E-mail enviado com sucesso!", response);
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error.message);
    throw error; // Lance o erro para que o controller o capture
  }
};

module.exports = { sendEmail };
