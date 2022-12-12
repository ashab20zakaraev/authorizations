import nodemailer from "nodemailer"

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "ashabzakaraev@gmail.com",
        pass: "rabpjulozpllfjuz"
      }
    })
  }


  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Активация аккаунта",
      text: "",
      html: `
        <div>
          <h1>Для активации аккаунта пройдите по ссылке!</h1>

          <a href="${link}">${link}</a>
        </div>
      `
    })
  }
}

export default new MailService()