// https://stackoverflow.com/a/71584393 getting activeTab for addListener
chrome.action.onClicked.addListener((tab) => {
  //console.log("executing the browser action");
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ["getHtmlOptions.js"]
  });
});
