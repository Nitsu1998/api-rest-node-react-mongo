import "dotenv/config.js";

export default {
  PORT: process.env.PORT || 8080,
  DB_URL: process.env.DB_URL,
  CORS: {
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  },
  SESSION: {
    secret: process.env.SESSION_PASSWORD,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 600000,
    },
  },
  TRASNPORTER_PASS: process.env.TRANSPORTER_PASS,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_ADMIN_PHONE: process.env.TWILIO_ADMIN_PHONE,
};
