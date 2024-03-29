"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ventasper = exports.ventasdina = exports.stockubi = exports.ordencomp = exports.insertaubica = exports.getmetadist = exports.createnewProducts = void 0;

var _request = _interopRequireDefault(require("express/lib/request"));

var _response = _interopRequireDefault(require("express/lib/response"));

var _connection = require("../database/connection");

var _mssql = _interopRequireDefault(require("mssql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getmetadist = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _connection.getConnection)();

          case 2:
            pool = _context.sent;
            _context.next = 5;
            return pool.request().query("SELECT TIPO,NUMERO,COD_PROD,CANTIDAD,LOTE,UBICACION FROM METADIST");

          case 5:
            result = _context.sent;
            console.log(result);
            res.json(result.recordset);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getmetadist(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getmetadist = getmetadist;

var createnewProducts = function createnewProducts(req, res) {
  res.send("hola ");
};

exports.createnewProducts = createnewProducts;

var stockubi = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, CODEMP, CODSUC, CLAVE, pool, result2;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, CODEMP = _req$body.CODEMP, CODSUC = _req$body.CODSUC, CLAVE = _req$body.CLAVE;

            if (!(CLAVE != process.env.CLAVE)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              Message: 'Ingresa Clave'
            }));

          case 3:
            console.log(CODEMP, CODSUC);
            _context2.next = 6;
            return (0, _connection.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input('CODEMP', _mssql["default"].VarChar(3), CODEMP).input('CODSUC', _mssql["default"].VarChar(3), CODSUC).execute('SP_IN_STOCK_PRODUCTOS_API');

          case 9:
            result2 = _context2.sent;
            //  console.log(result2);
            // .input('CODSUC', sql.VarChar(3) , '10')
            // .input('COD_PROD', sql.VarChar(30) , '101010200')
            //.output('output_parameter', sql.VarChar(50))
            //res.json(result2.recordset);
            res.json(result2);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function stockubi(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.stockubi = stockubi;

var ordencomp = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body2, CODEMP, CODSUC, TIPO, NUMERO, CLAVE, pool, result2;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, CODEMP = _req$body2.CODEMP, CODSUC = _req$body2.CODSUC, TIPO = _req$body2.TIPO, NUMERO = _req$body2.NUMERO, CLAVE = _req$body2.CLAVE;

            if (!(CLAVE != process.env.CLAVE)) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              Message: 'Ingresa Clave'
            }));

          case 3:
            console.log(CODEMP, CODSUC);
            _context3.next = 6;
            return (0, _connection.getConnection)();

          case 6:
            pool = _context3.sent;
            _context3.next = 9;
            return pool.request().input('CODEMP', _mssql["default"].VarChar(3), CODEMP).input('CODSUC', _mssql["default"].VarChar(3), CODSUC).input('TIPO', _mssql["default"].VarChar(3), TIPO).input('NUMERO', _mssql["default"].Decimal, NUMERO).execute('SP_IN_CONS_ORDENCOMP_API');

          case 9:
            result2 = _context3.sent;
            //  console.log(result2);
            // .input('CODSUC', sql.VarChar(3) , '10')
            // .input('COD_PROD', sql.VarChar(30) , '101010200')
            //.output('output_parameter', sql.VarChar(50))
            //res.json(result2.recordset);
            res.json(result2);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function ordencomp(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.ordencomp = ordencomp;

var ventasdina = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body3, CODEMP, CODSUC, FECHA_DESDE, FECHA_HASTA, CLIENTE, VEND, UNIDADES, Q1, Q2, COD_PROD, CLAVE, pool, result2;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body3 = req.body, CODEMP = _req$body3.CODEMP, CODSUC = _req$body3.CODSUC, FECHA_DESDE = _req$body3.FECHA_DESDE, FECHA_HASTA = _req$body3.FECHA_HASTA, CLIENTE = _req$body3.CLIENTE, VEND = _req$body3.VEND, UNIDADES = _req$body3.UNIDADES, Q1 = _req$body3.Q1, Q2 = _req$body3.Q2, COD_PROD = _req$body3.COD_PROD, CLAVE = _req$body3.CLAVE;
            console.log(CODEMP, CODSUC, FECHA_DESDE, FECHA_HASTA, CLIENTE, VEND, UNIDADES, Q1, Q2, COD_PROD, CLAVE);

            if (!(CLAVE != process.env.CLAVE)) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              Message: 'Ingresa Clave'
            }));

          case 4:
            console.log(CODEMP, CODSUC);
            _context4.next = 7;
            return (0, _connection.getConnection)();

          case 7:
            pool = _context4.sent;
            _context4.next = 10;
            return pool.request().input('CODEMP', _mssql["default"].VarChar(3), CODEMP).input('CODSUC', _mssql["default"].VarChar(3), CODSUC).input('FECHA_DESDE', _mssql["default"].VarChar(10), FECHA_DESDE).input('FECHA_HASTA', _mssql["default"].VarChar(10), FECHA_HASTA).input('CLIENTE', _mssql["default"].VarChar(15), CLIENTE).input('VEND', _mssql["default"].VarChar(15), VEND).input('UNIDADES', _mssql["default"].VarChar(15), UNIDADES).input('Q1', _mssql["default"].Int, Q1).input('Q2', _mssql["default"].Int, Q2).input('COD_PROD', _mssql["default"].VarChar(20), COD_PROD).execute('SP_FA_INFORME_VENTAS_API_DINA');

          case 10:
            result2 = _context4.sent;
            res.json(result2);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function ventasdina(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.ventasdina = ventasdina;

var insertaubica = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var ubica, _req$body4, CLAVE, TIPO, NUMERO, LISTA, pool, index, COD_PROD, CANTIDAD, LOTE, UBICACION;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //const ubica = [{COD_PROD, CANTIDAD}];
            ubica = [];
            _req$body4 = req.body, CLAVE = _req$body4.CLAVE, TIPO = _req$body4.TIPO, NUMERO = _req$body4.NUMERO;
            LISTA = req.body.LISTA;
            console.log(LISTA);

            if (!(CLAVE != process.env.CLAVE)) {
              _context5.next = 7;
              break;
            }

            console.log("Ingrese clave");
            return _context5.abrupt("return", res.status(400).json({
              Message: 'Ingresa Clave'
            }));

          case 7:
            _context5.next = 9;
            return (0, _connection.getConnection)();

          case 9:
            pool = _context5.sent;
            _context5.next = 12;
            return pool.request().input('TIPO', _mssql["default"].VarChar(3), TIPO).input('NUMERO', _mssql["default"].Decimal, NUMERO).query("DELETE FROM METADIST WHERE TIPO= @TIPO AND NUMERO = @NUMERO  ");

          case 12:
            //ubica.push(req.body.LISTA);
            console.log(LISTA.length);
            index = 0;

          case 14:
            if (!(index < LISTA.length)) {
              _context5.next = 25;
              break;
            }

            COD_PROD = LISTA[index].COD_PROD;
            CANTIDAD = LISTA[index].CANTIDAD;
            LOTE = LISTA[index].LOTE;
            UBICACION = LISTA[index].UBICACION;
            console.log(COD_PROD);
            _context5.next = 22;
            return pool.request().input('TIPO', _mssql["default"].VarChar(3), TIPO).input('NUMERO', _mssql["default"].Decimal, NUMERO).input('COD_PROD', _mssql["default"].VarChar(30), COD_PROD).input('CANTIDAD', _mssql["default"].Decimal, CANTIDAD).input('LOTE', _mssql["default"].VarChar(20), LOTE).input('UBICACION', _mssql["default"].VarChar(20), UBICACION).query("INSERT INTO METADIST (TIPO,NUMERO,COD_PROD,CANTIDAD,LOTE,UBICACION) VALUES(@TIPO,@NUMERO,@COD_PROD,@CANTIDAD,@LOTE,@UBICACION) ");

          case 22:
            index++;
            _context5.next = 14;
            break;

          case 25:
            console.log(ubica);
            res.json();
            /*
                 const pool =  await getConnection();
                 let result2 = await pool.request()
                    .input('CODEMP', sql.VarChar(3) ,CODEMP)
                    .input('CODSUC', sql.VarChar(3) ,CODSUC)
                    .input('TIPO'  , sql.VarChar(3) ,TIPO)
                    .input('NUMERO', sql.Decimal    ,NUMERO)               
                    .execute('SP_IN_CONS_ORDENCOMP_API')
             */
            //  console.log(result2);
            // .input('CODSUC', sql.VarChar(3) , '10')
            // .input('COD_PROD', sql.VarChar(30) , '101010200')
            //.output('output_parameter', sql.VarChar(50))
            //res.json(result2.recordset);
            //  res.json(result2);

          case 27:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function insertaubica(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.insertaubica = insertaubica;

var ventasper = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body5, CODEMP, CODSUC, CLAVE, REPORTE, FILTRO, PERIODO, MES, pool, result2;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body5 = req.body, CODEMP = _req$body5.CODEMP, CODSUC = _req$body5.CODSUC, CLAVE = _req$body5.CLAVE, REPORTE = _req$body5.REPORTE, FILTRO = _req$body5.FILTRO, PERIODO = _req$body5.PERIODO, MES = _req$body5.MES;
            console.log(CODEMP, CODSUC, CLAVE, REPORTE, FILTRO, PERIODO, MES);

            if (!(CLAVE != process.env.CLAVE)) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              Message: 'Ingresa Clave'
            }));

          case 4:
            console.log(CODEMP, CODSUC);
            _context6.next = 7;
            return (0, _connection.getConnection)();

          case 7:
            pool = _context6.sent;
            _context6.next = 10;
            return pool.request().input('CODEMP', _mssql["default"].VarChar(3), CODEMP).input('CODSUC', _mssql["default"].VarChar(3), CODSUC).input('REPORTE', _mssql["default"].VarChar(20), REPORTE).input('FILTRO', _mssql["default"].VarChar(20), FILTRO).input('PERIODO', _mssql["default"].Int, PERIODO).input('MES', _mssql["default"].VarChar(20), MES).execute('SP_FA_INFORME_VENTAS_API_PER');

          case 10:
            result2 = _context6.sent;
            //  res.json(result2.recordset);
            res.json(result2);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function ventasper(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.ventasper = ventasper;