"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _sequelize = require("sequelize");

var handleFindingByPampersID =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, binding) {
    var pampersId, dataForPampersID;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            pampersId = req.query.pampersId;
            _context.next = 4;
            return binding.findAll({
              where: {
                PampersLoyaltyId: pampersId
              }
            });

          case 4:
            dataForPampersID = _context.sent;
            res.status(200).json({
              message: "Retreived data for sent id ".concat(pampersId),
              binding: dataForPampersID
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(422).json({
              message: 'Cannot Retreive the data for binding',
              error: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function handleFindingByPampersID(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var handleUnbinding =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, binding, bindingstatus) {
    var unbindingId, bindingStatusData, unBindingStautsId, dataForUnbinding;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            unbindingId = req.query.unbindingId;
            _context2.next = 4;
            return bindingstatus.findAll({
              where: {
                BindingStatus: 'Unbinded'
              },
              raw: true
            });

          case 4:
            bindingStatusData = _context2.sent;
            unBindingStautsId = bindingStatusData && bindingStatusData[0].bindingStatusId; // If the status is already unbinded then dont update the data

            _context2.next = 8;
            return binding.findOne({
              where: (0, _defineProperty2["default"])({
                BindingId: unbindingId
              }, _sequelize.Op.not, [{
                bindingStatusId: unBindingStautsId
              }]),
              raw: true
            });

          case 8:
            dataForUnbinding = _context2.sent;

            if (dataForUnbinding) {
              _context2.next = 11;
              break;
            }

            throw new Error("Cannot Unbind Id : ".concat(unbindingId, ". Because the status in already unbinded "));

          case 11:
            _context2.next = 13;
            return binding.update((0, _objectSpread2["default"])({}, dataForUnbinding, {
              bindingStatusId: unBindingStautsId
            }), {
              where: {
                BindingId: unbindingId
              }
            });

          case 13:
            res.status(200).json({
              message: "Successfully update the value for ".concat(unbindingId)
            });
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            res.status(422).json({
              message: _context2.t0.message || 'Cannot Retreive the data for binding'
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function handleUnbinding(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}(); // TODO:abstract all the basic crud to a function

/* Binding route */


var bindingRoute = function bindingRoute(_ref3) {
  var Binding = _ref3.Binding,
      BindingStatus = _ref3.BindingStatus;
  var bindingApi = (0, _express.Router)();
  bindingApi.get('/',
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(req, res) {
      var bindingData;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(Object.keys(req.query).length > 0)) {
                _context3.next = 5;
                break;
              }

              // eslint-disable-next-line no-unused-expressions
              req.query.pampersId && handleFindingByPampersID(req, res, Binding); // eslint-disable-next-line no-unused-expressions

              req.query.unbindingId && handleUnbinding(req, res, Binding, BindingStatus);
              _context3.next = 15;
              break;

            case 5:
              _context3.prev = 5;
              _context3.next = 8;
              return Binding.findAll();

            case 8:
              bindingData = _context3.sent;
              res.status(200).json({
                message: 'Successfully Retreived Data for binding',
                binding: bindingData
              });
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](5);
              res.status(422).json({
                message: 'Cannot Retreive the data for binding',
                error: _context3.t0
              });

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[5, 12]]);
    }));

    return function (_x8, _x9) {
      return _ref4.apply(this, arguments);
    };
  }());
  bindingApi.post('/',
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(req, res) {
      var bindingStatusData, bindingStautsId, bindingData;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return BindingStatus.findAll({
                where: {
                  BindingStatus: 'Binded'
                },
                raw: true
              });

            case 3:
              bindingStatusData = _context4.sent;
              bindingStautsId = bindingStatusData && bindingStatusData[0].bindingStatusId;
              _context4.next = 7;
              return Binding.create((0, _objectSpread2["default"])({}, req.body, {
                bindingStatusId: bindingStautsId
              }));

            case 7:
              bindingData = _context4.sent;
              res.status(200).json({
                message: 'Successfully Retreived Data for binding',
                binding: bindingData
              });
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              res.status(422).json({
                message: 'Failure creating binding',
                error: JSON.stringify(_context4.t0)
              });

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    }));

    return function (_x10, _x11) {
      return _ref5.apply(this, arguments);
    };
  }());
  return bindingApi;
};

var _default = bindingRoute;
exports["default"] = _default;