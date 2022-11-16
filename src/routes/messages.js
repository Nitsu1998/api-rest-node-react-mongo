import { Router } from "express";
import messagesController from '../controllers/messagesController.js'
const router = Router()

router.get('/', messagesController.getMessagesController)
router.post('/', messagesController.postMessageController)

export default router