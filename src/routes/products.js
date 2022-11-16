import { Router } from "express";
import productController from "../controllers/productsController.js";
const router = Router();
const isAdmin = true;

router.get("/", productController.getProductsController);
router.get("/:id", productController.getByIdController);

router.use(function middlewareIsAdmin(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "not admin" });
  }
  next();
});

router.post("/", productController.postProductController);
router.put("/:id", productController.updateByIdController);
router.delete("/:id", productController.deleteByIdController);

export default router;
