"use strict";
var landing= require('../../pages/ExperienceApp/landing.page.js');
var sts;

module.exports = {
TST_LAND_TC_1 :   async function (testdata) { 
sts = await landing.click_loginBtn();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_LAND_TC_2 :   async function (testdata) { 
sts = await landing.getData_landingPage(testdata);
await assertion.assertEqual(sts.loginBtn, testdata.loginBtn,"loginBtn Values is not as expected.");
await assertion.assertEqual(sts.subheadingText, testdata.subheadingText,"subheadingText Values is not as expected.");
await assertion.assertEqual(sts.signupBtn, testdata.signupBtn,"signupBtn Values is not as expected.");
await assertion.assertEqual(sts.loginBtn, testdata.loginBtn,"loginBtn Values is not as expected.");
await assertion.assertEqual(sts.brandLogo_img, true ,"brandLogo_img Values is not as expected.");
},

}