import Mongo from "../../services/mongo.js";

const generateRandom = () => {
  return "#" + (Math.random() + 1).toString(36).substring(4);
};

class ProductMongo extends Mongo {
  constructor() {
    super("products", {
      title: { type: String, required: true },
      description: { type: String, required: true },
      code: { type: String, default: generateRandom()},
      url: { type: String, required: true },
      price: { type: Number, required: true },
      stock: { type: Number, required: true },
      timestamp: { type: Number, default: new Date().getTime() },
      amount: {type: Number, default: 1}
    });
  }
}

export default ProductMongo;
