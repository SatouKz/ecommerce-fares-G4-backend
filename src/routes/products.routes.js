const router = require("express").Router();
const {
  createProduct,
  getProducts,
  deleteProduct,
  putProduct,
  getOneProduct,
  getProductByCategory,
  getProductCategory,
  deleteCategoryProduct,
  createCategoryProduct,
} = require("../controllers/productController");

router.get("/products/category", getProductCategory);

router.get("/products/category/:nombreCat", getProductByCategory);
router.get("/products", getProducts);
router.post("/products", createProduct);
router.post("/products/:idProduct/category/:idCategory", createCategoryProduct);
router.put("/products/:id", putProduct);
router.delete("/products/:id", deleteProduct);
router.delete(
  "/products/:idProduct/category/:idCategory",
  deleteCategoryProduct
);
router.get("/products/:id", getOneProduct);
module.exports = router;
