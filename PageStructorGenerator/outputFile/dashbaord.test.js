"use strict";
var dashbaord= require('../../pages/ExperienceApp/dashbaord.page.js');
var sts;

module.exports = {
TST_DASH_TC_1 :   async function (testdata) { 
sts = await dashbaord.click_help_btn();
await assertion.assertEqual(sts, true,"help_btn are not Clicked");
},

}