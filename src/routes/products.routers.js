import {Router} from "express";
import {ventasdina, getmetadist, stockubi, ordencomp, insertaubica} from "../controllers/products.controller"
const router = Router();
router.post('/metadist', getmetadist);

router.post('/stock', stockubi);
router.post('/ordencomp', ordencomp);
router.post('/insertaubica', insertaubica);
router.post('/ventasdina', ventasdina);


//router.post('/products', createnewProducts)
//router.delete('/products', getProducts)
//router.get('/products', getProducts)
export default router

