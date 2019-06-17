"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

/* eslint-disable no-console */
var sequalizeSync = function sequalizeSync() {// db.sequelize
  // 	.authenticate()
  // 	.then(() => {
  // 		console.log('Successfull Connected to database');
  // 	})
  // 	.catch(error => console.log('error when connecting to database', error));
  // db.sequelize
  // 	.sync({ force: true })
  // 	.then(() => {
  // 		console.log('Successfully Synced database');
  // 	})
  // 	.catch(error => console.log('error when syncing database', error));
};

var _default = sequalizeSync;
exports["default"] = _default;