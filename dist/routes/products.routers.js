"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var router = (0, _express.Router)();
router.post('/metadist', _products.getmetadist);
router.post('/stock', _products.stockubi);
router.post('/ordencomp', _products.ordencomp);
router.post('/insertaubica', _products.insertaubica);
router.post('/ventasdina', _products.ventasdina);
router.post('/ventasper', _products.ventasper); //router.post('/products', createnewProducts)
//router.delete('/products', getProducts)
//router.get('/products', getProducts)

var _default = router;
exports["default"] = _default;