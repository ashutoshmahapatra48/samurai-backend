import { Router } from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {
  getProductMaster,
  getProductMasterById,
  storeProductMaster,
  updateProductMaster,
} from '../controllers/productMaster.controller.js';
import {
  getFabricById,
  getFabrics,
  storeFabric,
  updateFabric,
} from '../controllers/fabric.controller.js';
import {
  getAccessories,
  getAccessoriesById,
  storeAccessories,
  updateAccessories,
} from '../controllers/accessories.controller.js';
import {
  getPacking,
  getPackingById,
  storePacking,
  updatePacking,
} from '../controllers/packing.controller.js';

const router = Router();
router.use(verifyJWT);

router.route('/product-master').get(getProductMaster).post(storeProductMaster);
router.route('/product-master/:id').get(getProductMasterById).put(updateProductMaster);

router.route('/fabrics').get(getFabrics).post(storeFabric);
router.route('/fabrics/:id').get(getFabricById).put(updateFabric);

router.route('/accessories').get(getAccessories).post(storeAccessories);
router.route('/accessories/:id').get(getAccessoriesById).put(updateAccessories);

router.route('/packing').get(getPacking).post(storePacking);
router.route('/packing/:id').get(getPackingById).put(updatePacking);

export default router;
