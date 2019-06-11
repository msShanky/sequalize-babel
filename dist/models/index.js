"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelizeConfig = _interopRequireDefault(require("../config/sequelizeConfig"));

var env = process.env.NODE_ENV || 'development';
var trimedENV = env.trim();
var config = _sequelizeConfig["default"][trimedENV];
var db = {};

var basename = _path["default"].basename(__filename);

var sequelize = new _sequelize["default"](config.database, config.username, config.password, config);

_fs["default"].readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  // eslint-disable-next-line dot-notation
  var model = sequelize["import"](_path["default"].join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
var _default = db;
exports["default"] = _default;