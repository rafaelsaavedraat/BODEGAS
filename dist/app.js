"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _products = _interopRequireDefault(require("./routes/products.routers"));

var _empleados = _interopRequireDefault(require("./routes/empleados.routers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', _config["default"].port);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_products["default"]);
app.use(_empleados["default"]);
var _default = app;
exports["default"] = _default;