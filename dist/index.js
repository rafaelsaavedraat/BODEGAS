"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database/connection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_app["default"].get('port')); //   a H


console.log('perro loco..');
console.log(_app["default"].get('port'));