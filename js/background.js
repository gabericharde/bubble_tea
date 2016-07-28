// chrome.browserAction.setBadgeText({text: "Bubble Tea"});

// chrome.browserAction.onClicked(
//	);

//chrome.commands.getAll(function(commands){
//  console.log(commands)
//})

chrome.commands.onCommand.addListener(function(command) {
  if(command == "bubble-tea-command") {
  	chrome.extension.getBackgroundPage().console.log(2+2);
  	alert("Your bubble-tea-command fired."); // for testing purposes only
    var pageTitle = document.title;
    console.log(pageTitle);
  };
});