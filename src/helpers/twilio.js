import twilio from 'twilio'
import config from '../config/config.js'

const client = twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN)
async function newWhatsappMessage(text, phone) {
    const options = {
        body: text,
        to: phone,
        from: 'whatsapp:+14155238886'
    }
    try{
        client.messages.create(options)
    }catch(err){
        console.log(err)
    }
}
export default newWhatsappMessage