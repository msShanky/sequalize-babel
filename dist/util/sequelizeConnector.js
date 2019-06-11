"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

/* eslint-disable no-console */
var sequalizeSync = function sequalizeSync() {
  _models["default"].sequelize.authenticate().then(function () {
    console.log('Successfull Connected to database');
  })["catch"](function (error) {
    return console.log('error when connecting to database', error);
  }); // db.sequelize
  // 	.sync()
  // 	.then(() => {
  // 		console.log('Successfully Synced database');
  // 	})
  // 	.catch(error => console.log('error when syncing database', error));

};

var _default = sequalizeSync;
exports["default"] = _default;