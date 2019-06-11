"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

/* retailerTransaction page. */
var retailerTransactionRoute = function retailerTransactionRoute(_ref) {
  var retailertransaction = _ref.retailertransaction;
  var retailerTransactionApi = (0, _express.Router)();
  retailerTransactionApi.get('/',
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res) {
      var retailerTransactionData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return retailertransaction.findAll();

            case 3:
              retailerTransactionData = _context.sent;
              res.status(200).json({
                message: 'Successfully Retreived Data for retailerTransaction',
                retailerTransaction: retailerTransactionData
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(422).json({
                message: 'Cannot Retreive the data for retailerTransaction',
                error: _context.t0
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  retailerTransactionApi.post('/',
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res) {
      var retailerTransactionData;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return retailertransaction.create(req.body);

            case 3:
              retailerTransactionData = _context2.sent;
              res.status(200).json({
                message: 'Successfully Retreived Data for retailerTransaction',
                retailerTransaction: retailerTransactionData
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              res.status(422).json({
                message: 'Failure creating retailerTransaction',
                error: _context2.t0
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }());
  return retailerTransactionApi;
};

var _default = retailerTransactionRoute;
exports["default"] = _default;