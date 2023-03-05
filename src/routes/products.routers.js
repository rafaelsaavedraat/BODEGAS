import {Router} from "express";
import {createnewProducts, getProducts, stockubi, ordencomp, insertaubica} from "../controllers/products.controller"
const router = Router();
//router.get('/products', getProducts);

router.post('/stock', stockubi);
router.post('/ordencomp', ordencomp);
router.post('/insertaubica', insertaubica);

//router.post('/products', createnewProducts)
//router.delete('/products', getProducts)
//router.get('/products', getProducts)
export default router

