import Mongo from "../../services/mongo.js";

class CartMongo extends Mongo {
  constructor() {
    super("carts", {
      timestamp: { type: Number, default: new Date().getTime() },
      products : { type: Array, required: true },
      userId: {type: String, require: true}
    });
  }
}

export default CartMongo;