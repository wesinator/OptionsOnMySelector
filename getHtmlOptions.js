// ==UserScript==
// @name     Get HTML <select> options list
// @author   wesinator
// @version  1
// @grant    none
// @match    *://*/*
// ==/UserScript==


var selects = document.getElementsByTagName("select");
if (selects.length) {
  for (var select of selects) {
    //if (select.id) {
      var getSelects = confirm(`Do you want to download the page's option list "${select.name}" to a text file?`);
      var getSelects = confirm(`Do you want to download the page's option list "${select.name || select.id}" to a text file?`);
      if (getSelects) {
        items = getSelectOptionItems(select);
        console.log(items.length, "items")

      	if (items.length) {
        	var filename = `options_${document.location.hostname}_${select.id || select.name}.txt`;
        	arrayToFile(items, filename);
      	}
      }
    //}
  }
}

function getSelectOptionItems(select) {
  var items = [];

  for (var item of select) {
    if (item) {
      console.log(item.text);
      items.push(item.text);
    }
  }

  return items;
}

function arrayToFile(list, filename) {
  var contents = `/* retrieved from: ${document.URL} \n${Date()} */\n\n` + list.join('\n');
  fileDataDownload(contents, filename, "text/plain");
}

function fileDataDownload(contents, name, mimeType) {
  // https://stackoverflow.com/questions/34101871/save-data-using-greasemonkey-tampermonkey-for-later-retrieval
  var a = document.createElement("a");

  a.href = `data:${mimeType};charset=utf-8,` + encodeURIComponent(contents);

  a.download = name;
  a.click();
}
