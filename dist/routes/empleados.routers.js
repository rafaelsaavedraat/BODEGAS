"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _empleados = require("../controllers/empleados.controller");

var router = (0, _express.Router)(); //router.get('/products', getProducts);

router.get('/sobres', _empleados.sobrepago);
router.post('/sobres', _empleados.sobrepago);
var _default = router;
exports["default"] = _default;