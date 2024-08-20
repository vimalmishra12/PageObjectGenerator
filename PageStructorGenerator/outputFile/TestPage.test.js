"use strict";
var TestPage= require('../../pages/ExperienceApp/TestPage.page.js');
var sts;

module.exports = {
TST_TEST_TC_1 :   async function () { 
sts = await TestPage.isInitialized();
await assertion.assertEqual(sts.pageStatus, true, "TestPage page status mismatch");
},

TST_TEST_TC_2 :   async function (testdata) { 
sts = await TestPage.click_signupBtn();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_TEST_TC_3 :   async function (testdata) { 
sts = await TestPage.click_loginBtn();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_TEST_TC_4 :   async function (testdata) { 
sts = await TestPage.click_languageSelector_dropdown();
await assertion.assertEqual(sts, true,"languageSelector_dropdown are not Clicked");
},

TST_TEST_TC_5 :   async function (testdata) { 
sts = await TestPage.getData_landingPage(testdata);
await assertion.assertEqual(sts.headingText, testdata.headingText,"headingText Values is not as expected.");
await assertion.assertEqual(sts.subheadingText, testdata.subheadingText,"subheadingText Values is not as expected.");
await assertion.assertEqual(sts.signupBtn, testdata.signupBtn,"signupBtn Values is not as expected.");
await assertion.assertEqual(sts.loginBtn, testdata.loginBtn,"loginBtn Values is not as expected.");
await assertion.assertEqual(sts.brandLogo_img, true ,"brandLogo_img Values is not as expected.");
},

}