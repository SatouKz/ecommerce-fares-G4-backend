import { Router } from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";

const router = Router();

router.get("/", getProducts);
router.post("/", protect, admin, createProduct);
router.post("/:id/reviews", protect, createProductReview);
router.get("/top", getTopProducts);
router.get("/:id", getProductById);
router.delete("/:id", protect, admin, deleteProduct);
router.put("/:id", protect, admin, updateProduct);

export default router;
