"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

/* Binding Status route */
var bindingStatusRoute = function bindingStatusRoute(_ref) {
  var bindingstatus = _ref.bindingstatus;
  var bindingStatusApi = (0, _express.Router)();
  bindingStatusApi.get('/',
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res) {
      var bindingStatusData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return bindingstatus.findAll();

            case 3:
              bindingStatusData = _context.sent;
              res.status(200).json({
                message: 'Successfully Retreived Data for binding status',
                bindingStatus: bindingStatusData
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(422).json({
                message: 'Cannot Retreive the data for binding status',
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
  bindingStatusApi.post('/',
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res) {
      var bindingStatusData;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return bindingstatus.create(req.body);

            case 3:
              bindingStatusData = _context2.sent;
              res.status(200).json({
                message: 'Successfully Retreived Data for binding status',
                bindingStatus: bindingStatusData
              });
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0, 'error');
              res.status(422).json({
                message: 'Failure creating binding status',
                error: JSON.stringify(_context2.t0)
              });

            case 11:
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
  return bindingStatusApi;
};

var _default = bindingStatusRoute;
exports["default"] = _default;