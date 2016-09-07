
/*
chrome.tabs.executeScript(
  tabId,                 // optional integer
  details,               // extensionTypes.InjectDetails
  function(result) {...} // optional function
)

var makeItGreen = 'document.body.style.border = "5px solid green"';
chrome.tabs.executeScript({
  code: makeItGreen
});

*/