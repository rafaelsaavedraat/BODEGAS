import {Router} from "express";
import {createnewProducts, getProducts, stockubi} from "../controllers/products.controller"
const router = Router();
//router.get('/products', getProducts);

router.post('/stock', stockubi);
//router.post('/products', createnewProducts)
//router.delete('/products', getProducts)
//router.get('/products', getProducts)
export default router

