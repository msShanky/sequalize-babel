"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

var _sequelizeConnector = _interopRequireDefault(require("./util/sequelizeConnector"));

// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public'))); // Establish a connection with the database

(0, _sequelizeConnector["default"])();
app.use('/api', _index["default"]);
var _default = app;
exports["default"] = _default;