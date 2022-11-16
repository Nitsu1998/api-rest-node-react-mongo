import Mongo from "../../services/mongo.js";

class UserMongo extends Mongo {
  constructor() {
    super("users", {
      username: { type: String, required: true },
      password: { type: String, required: true },
      email: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phone: { type: String, require: true },
      isAdmin: {type: Boolean, default: false}
    });
  }
}

export default UserMongo;
