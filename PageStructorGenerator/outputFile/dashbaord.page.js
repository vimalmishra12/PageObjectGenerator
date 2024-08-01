"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
help_btn: selectorFile.css.ComproC1.dashbaord.help_btn,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus:await action.waitForDisplayed(this.help_btn),
};
return res; 
},


click_help_btn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.help_btn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " help_btn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"help_btn is NOT clicked", 'error');
}
return res;
},

}

