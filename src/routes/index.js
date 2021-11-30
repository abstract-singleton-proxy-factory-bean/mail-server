import { Router } from 'express'
import MailController from '../controllers/mail-controller.js'

const router = Router()

router.get('/mail', MailController.sendMail)

export default router
