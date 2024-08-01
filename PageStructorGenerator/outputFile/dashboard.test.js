"use strict";
var dashboard= require('../../pages/ExperienceApp/dashboard.page.js');
var sts;

module.exports = {
TST_DASH_TC_1 :   async function (testdata) { 
sts = await dashboard.click_help_btn();
await assertion.assertEqual(sts, true,"help_btn are not Clicked");
},

TST_DASH_TC_2 :   async function (testdata) { 
sts = await dashboard.getData_dashboard(testdata);
await assertion.assertEqual(sts.help_btn, testdata.help_btn,"help_btn Values is not as expected.");
await assertion.assertEqual(sts.subheadingText, testdata.subheadingText,"subheadingText Values is not as expected.");
await assertion.assertEqual(sts.signupBtn, testdata.signupBtn,"signupBtn Values is not as expected.");
await assertion.assertEqual(sts.loginBtn, testdata.loginBtn,"loginBtn Values is not as expected.");
await assertion.assertEqual(sts.brandLogo_img, true ,"brandLogo_img Values is not as expected.");
},

}