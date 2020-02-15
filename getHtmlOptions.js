// ==UserScript==
// @name     Get HTML <select> options list
// @version  1
// @grant    none
// @match    *://*/*
// ==/UserScript==


var selects = document.getElementsByTagName("select");
if (selects.length) {
  for (var select of selects) {
    if (select.id) {
      var getSelects = confirm("Do you want to download the option lists on this page to file ?");
      if (getSelects) {
        items = getSelectOptionItems(select);
        console.log(items.length, " items")

      	if (items.length) {
        	var filename = `options_${select.id}.txt`;
        	arrayToFile(items, filename);
      	}
      }
    }
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
  fileDataDownload(list.join('\n'), filename, "text/plain");
}

function fileDataDownload(contents, name, mimeType) {
  // https://stackoverflow.com/questions/34101871/save-data-using-greasemonkey-tampermonkey-for-later-retrieval
  var a = document.createElement("a");

  a.href = `data:${mimeType};charset=utf-8,` + encodeURIComponent(contents);

  a.download = name;
  a.click();
}
