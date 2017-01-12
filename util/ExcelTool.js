/**
 * Created by oliver on 12/01/2017.
 */


function praseExcel() {

    var xlsx = require("node-xlsx");



    var list = xlsx.parse("parking.xlsx");



    return list;

}

module.exports.praseExcel = praseExcel;