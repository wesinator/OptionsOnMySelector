browser.browserAction.onClicked.addListener(() => {
    //console.log("executing the browser action");
    browser.tabs.executeScript({file: "getHtmlOptions.js"});
});
