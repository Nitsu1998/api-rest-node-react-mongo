const { default: ProductMongo } = await import("./products/productsMongo.js");
const { default: CartMongo } = await import("./cart/cartMongo.js");
const { default: MessageMongo } = await import("./messages/messagesMongo.js");
const { default: UserMongo } = await import("./users/usersMongo.js");

const ProductDao = new ProductMongo();
const CartDao = new CartMongo();
const MessageDao = new MessageMongo();
const UserDao = new UserMongo();

export { ProductDao, CartDao, MessageDao, UserDao };
