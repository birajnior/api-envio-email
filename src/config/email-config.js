const smtpConfig = {
  host: "smtp.seuservidor.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // Usuário do servidor
    pass: process.env.SMTP_PASS, // Senha do servidor
  },
};

module.exports = { smtpConfig };
