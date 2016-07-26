// chrome.browserAction.setBadgeText({text: "Bubble Tea"});

// chrome.browserAction.onClicked(
//	);

chrome.commands.getAll(function(commands){
  console.log(commands)
})

chrome.commands.onCommand.addListener(function(command) {
  if(command === "bubble-tea-command") {
    var pageTitle = document.head.getElementsByTagName("title").innerHTML[0];
    pageTitle;
	console.log(pageTitle);
  };
});