import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getProductMaster, storeProductMaster } from "../controllers/productMaster.controller.js";

const router = Router();
router.use(verifyJWT);

router.route("/product-master").get(getProductMaster);
router.route("/product-master/create").post(storeProductMaster);

export default router;
