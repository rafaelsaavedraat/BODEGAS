import {Router} from "express";
import {sobrepago} from "../controllers/empleados.controller"
const router = Router();
//router.get('/products', getProducts);
router.get('/sobres', sobrepago);
router.post('/sobres', sobrepago);


export default router