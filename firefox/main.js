// https://stackoverflow.com/a/71584393 getting activeTab for addListener
chrome.action.onClicked.addListener(async (tab) => {
  //console.log("executing the browser action");
  browser.scripting.executeScript({
    target: {tabId: tab.id, allFrames: true},
    files: ["getHtmlOptions.js"],
  });
});
