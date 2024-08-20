"use strict";
var reset= require('../../pages/ExperienceApp/reset.page.js');
var sts;

module.exports = {
TST_RESE_TC_1 :   async function (testdata) { 
sts = await reset.getData_resetPassword(testdata);
await assertion.assertEqual(sts.resetPassword, testdata.resetPassword,"resetPassword Values is not as expected.");
},

}