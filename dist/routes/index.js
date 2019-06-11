"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _retailer = _interopRequireDefault(require("./retailer"));

var _models = _interopRequireDefault(require("../models"));

var _binding = _interopRequireDefault(require("./binding"));

var _bindingStatus = _interopRequireDefault(require("./bindingStatus"));

var _product = _interopRequireDefault(require("./product"));

var _retailerTransaction = _interopRequireDefault(require("./retailerTransaction"));

var api = (0, _express.Router)();
api.use('/retailer', (0, _retailer["default"])(_models["default"]));
api.use('/binding', (0, _binding["default"])(_models["default"]));
api.use('/binding-status', (0, _bindingStatus["default"])(_models["default"]));
api.use('/product', (0, _product["default"])(_models["default"]));
api.use('/retailer-transaction', (0, _retailerTransaction["default"])(_models["default"]));
api.get('/', function (req, res) {
  res.send('YAAAAY !!!, Home Page is working !!!!!!!!');
});
var _default = api;
exports["default"] = _default;