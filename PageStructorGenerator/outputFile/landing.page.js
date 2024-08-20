"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
loginBtn: selectorFile.css.ComproC1.landing.loginBtn,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.loginBtn),
};
return res; 
},

getData_landingPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
loginBtn:(( await action.getElementCount(this.loginBtn)) > 0) ? await action.getText(this.loginBtn) : null,
subheadingText:(( await action.getElementCount(this.subheadingText)) > 0) ? await action.getText(this.subheadingText) : null,
signupBtn:(( await action.getElementCount(this.signupBtn)) > 0) ? await action.getText(this.signupBtn) : null,
loginBtn:(( await action.getElementCount(this.loginBtn)) > 0) ? await action.getText(this.loginBtn) : null,
brandLogo_img:(( await action.getElementCount(this.brandLogo_img)) > 0) ? await action.waitForDisplayed(this.brandLogo_img) : false,
}
 return obj; 
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

}

