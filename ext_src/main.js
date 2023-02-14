chrome.browserAction.onClicked.addListener(() => {
  //console.log("executing the browser action");
  chrome.tabs.executeScript({
    file: "getHtmlOptions.js",
    allFrames: true
  });
});
