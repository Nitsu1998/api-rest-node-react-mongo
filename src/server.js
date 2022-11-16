import express, { json, urlencoded } from "express";
import routes from "./routes/index.js";
import config from "./config/config.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import auth from "./helpers/passport.js";
import compression from "compression";
import cors from "cors";
const {pathname: root} = new URL('../public', import.meta.url)

const app = express();
const port = parseInt(process.argv[2]) || config.PORT;

app.use(express.static(root))
app.use(cors(config.CORS));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());
app.use(session(config.SESSION));
auth(app);

app.use("/", routes);

app.get("*", (req, res) => {
  return res.status(404).json({ message: "This route doesn't exist" });
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server started on port ${port}`);
  } else {
    console.log(`Error: ${error}`);
  }
});
