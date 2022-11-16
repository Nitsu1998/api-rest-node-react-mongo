import { ProductDao } from "../models/index.js";

class ProductsController {
  async getProductsController(req, res) {
    try {
      const products = await ProductDao.getAll();
      return res.status(200).json(products);
    } catch {
      res.sendStatus(500);
    }
  }

  async postProductController(req, res) {
    try {
      await ProductDao.save(req.body);
      return res.sendStatus(201);
    } catch {
      res.sendStatus(500);
    }
  }

  async getByIdController(req, res) {
    try {
      const product = await ProductDao.getById(req.params.id);
      if (product) {
        return res.status(200).json(product);
      }
      if (!product) {
        return res.status(404).json({ error: "Product not exist" });
      }
      return res.status(204).json(product.message);
    } catch {
      res.sendStatus(500);
    }
  }

  async updateByIdController(req, res) {
    try {
      const response = await ProductDao.updateById(req.params.id, req.body);
      if (response?.message) {
        return res.status(200).json(response);
      }
      return res.status(404).json(response);
    } catch {
      res.sendStatus(500);
    }
  }

  async deleteByIdController(req, res) {
    try {
      const response = await ProductDao.deleteById(req.params.id);
      if (response?.message) {
        return res.status(200).json(response);
      }
      return res.status(404).json(response);
    } catch {
      res.sendStatus(500);
    }
  }
}
const productController = new ProductsController();

export default productController;
