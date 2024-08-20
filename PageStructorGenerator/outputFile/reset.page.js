"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
resetPassword: selectorFile.css.ComproC1.reset.resetPassword,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.resetPassword),
};
return res; 
},

getData_resetPassword: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
resetPassword:(( await action.getElementCount(this.resetPassword)) > 0) ? await action.getText(this.resetPassword) : null,
}
 return obj; 
},


}

