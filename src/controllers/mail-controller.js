import fs from 'fs/promises'
import { isEmpty } from '../utils/strings.js'
import { MAIL_TRANSPORTER } from '../config/globals.js'

export default class MailController {
  /**
   * Route for sending an e-mail
   * @param { import('express').Request } request HTTP request
   * @param { import('express').Response } response HTTP response
   * @returns { import('express').Response } JSON response for sending the e-mail
   */
  static async sendMail(request, response) {
    const { email, name } = request.query

    if (isEmpty(name) || isEmpty(email)) {
      return response.status(400).json({
        error: 'Missing parameters',
        details: 'name and email are required',
      })
    }

    const template = await fs.readFile('./templates/mail.html', 'utf8')

    await MAIL_TRANSPORTER.sendMail({
      from: '"Eder Lima" <lima.eder101@gmail.com>',
      to: email,
      subject: `Olá, ${name} - Obrigado por se cadastrar na nossa newsletter.`,
      html: template.replace(/\$NAME/gm, name),
    })

    return response.status(200).json({
      message: 'Mail was sent',
    })
  }
}
