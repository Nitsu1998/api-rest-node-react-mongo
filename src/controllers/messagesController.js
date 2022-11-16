import { MessageDao } from "../models/index.js";
import { normalize, schema } from 'normalizr'

class MessagesController {

  async getMessagesController(req, res) {
    try {
      const response = await MessageDao.getAll()

      const authorSchema = new schema.Entity('author', {},{idAttribute: 'id'} )
      const textSchema = new schema.Entity('message', {
        author: authorSchema,
      }, {
        idAttribute: '_id'
      })
      const messagesSchema = new schema.Entity('messages', {
        messages: [textSchema]
      }, {
        idAttribute: 'id'
      })

      const normalizedMessage = normalize({id: 'messages', messages: response}, messagesSchema)

      return res.status(200).json(normalizedMessage)
    } catch (err) {
      console.log(err);
    }
  }

  async postMessageController(req, res) {
    try {
      await MessageDao.save(req.body)
      const response = this.getMessagesController()
      return res.status(201).json(response);
    } catch (err) {
      console.log(err);
    }
  }
}

const messagesController = new MessagesController();
export default messagesController;
