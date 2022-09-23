import {Router} from "express";
import {createnewProducts, getProducts, listaprec} from "../controllers/products.controller"
const router = Router();
//router.get('/products', getProducts);

router.post('/listaprec', listaprec);
//router.post('/products', createnewProducts)
//router.delete('/products', getProducts)
//router.get('/products', getProducts)
export default router

