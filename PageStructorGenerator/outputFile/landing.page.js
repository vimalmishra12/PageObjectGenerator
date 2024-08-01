"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
headingText: selectorFile.css.ComproC1.landing.headingText,
subheadingText: selectorFile.css.ComproC1.landing.subheadingText,
signupBtn: selectorFile.css.ComproC1.landing.signupBtn,
loginBtn: selectorFile.css.ComproC1.landing.loginBtn,
brandLogo_img: selectorFile.css.ComproC1.landing.brandLogo_img,
languageSelector_dropdown: selectorFile.css.ComproC1.landing.languageSelector_dropdown,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus:await action.waitForDisplayed(this.brandLogo_img),
};
return res; 
},

getData_landingPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
headingText:(( await action.getElementCount(this.headingText)) > 0) ? await action.getText(this.headingText) : null,
subheadingText:(( await action.getElementCount(this.subheadingText)) > 0) ? await action.getText(this.subheadingText) : null,
signupBtn:(( await action.getElementCount(this.signupBtn)) > 0) ? await action.getText(this.signupBtn) : null,
loginBtn:(( await action.getElementCount(this.loginBtn)) > 0) ? await action.getText(this.loginBtn) : null,
brandLogo_img:(( await action.getElementCount(this.brandLogo_img)) > 0) ? await action.waitForDisplayed(this.brandLogo_img) : false,
}
 return obj; 
},


click_signupBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.signupBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " signupBtn is clicked");
res =await require ('./signup.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"signupBtn is NOT clicked", 'error');
}
return res;
},

click_loginBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.loginBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " loginBtn is clicked");
res =await require ('./login.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"loginBtn is NOT clicked", 'error');
}
return res;
},

click_languageSelector_dropdown: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.languageSelector_dropdown);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " languageSelector_dropdown is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"languageSelector_dropdown is NOT clicked", 'error');
}
return res;
},

}

