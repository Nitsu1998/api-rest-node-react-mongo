import Mongo from "../../services/mongo.js";

class MessagesMongo extends Mongo {
    constructor(){
        super("messages", {
            author: {
                id: { type: String, required: true },
                name: { type: String, required: true },
                lastName: { type: String, required: true },
                age: { type: Number, required: true },
                nickname: {  type: String, required: true },
                avatar: { type: String, required: true },
            },
            text: { type: String, required: true }
        })
    }
}

export default MessagesMongo