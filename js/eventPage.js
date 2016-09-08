chrome.commands.onCommand.addListener( function(command) {
//  debugger
  if(command === "bubble-tea-command"){
   chrome.tabs.executeScript({
      file: "./temp.js"
    });
  };
});