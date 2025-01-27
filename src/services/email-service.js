const nodemailer = require("nodemailer");
const { smtpConfig } = require("../config/email-config.js");

const transporter = nodemailer.createTransport(smtpConfig);

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

  await transporter.sendMail({
    from: `"${nome}" <${email}>`,
    to: "seu-email@exemplo.com",
    subject: "Novo contato recebido",
    html: message,
  });
};

module.exports = { sendEmail };
