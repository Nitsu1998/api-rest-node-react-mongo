import { Router } from "express";
import products from "./products.js";
import cart from "./cart.js";
import messages from "./messages.js";
import authController from "../controllers/authController.js";
import passport from "passport";
import infoController from "../controllers/infoController.js";

const router = Router();

// Info proyect
router.get("/info", infoController.getInfoController)

// Register
router.post("/register", passport.authenticate('register', {failureRedirect: '/failRegister'}), authController.registerController);
router.get("/failRegister", authController.failRegisterController);

// Login
router.post("/login", passport.authenticate('login', {failureRedirect: '/failLogin'}), authController.loginController)
router.get("/failLogin", authController.failLoginController);

// Middleware authenticated
router.use(async function middlewareSession(req, res, next) {
    if(req.isAuthenticated()){
        return next()
    }
    return res.status(401).json({ message: "Please login" })
});

// Logout
router.post("/logout", authController.logoutController);

// Products
router.use("/api/products", products);

// Cart
router.use("/api/cart", cart);

// Messages
router.use("/api/messages", messages);

export default router;
