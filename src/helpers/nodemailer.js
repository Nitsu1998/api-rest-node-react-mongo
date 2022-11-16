import { createTransport } from "nodemailer";
import config from "../config/config.js";

async function newMail(subject, info) {
  const transporter = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "amina18@ethereal.email",
      pass: config.TRASNPORTER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "serverNode@server.com",
    to: "amina18@ethereal.email",
    subject: subject,
    html: JSON.stringify(info),
  };
  try {
    await transporter.sendMail(mailOptions);
    return
  } catch (err) {
    console.log(err);
  }
}

export default newMail;
