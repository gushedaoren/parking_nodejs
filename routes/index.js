var express = require('express');
var router = express.Router();

var data;

/* GET home page. */
router.get('/', function(req, res, next) {
  data=praseExcel();
  res.json(data);
});


function  praseExcel() {

  var tool=require("../util/ExcelTool.js");
  list=tool.praseExcel();

  return list



}
module.exports = router;
module.exports.praseExcel=praseExcel;
