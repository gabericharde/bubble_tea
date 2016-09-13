
var bubble = {
  "date": Date(),
  "title": document.title,
  "url": window.location.toString(),
  "domain": window.location.hostname,
  "meta": [document.querySelector("meta[property='og:type']"), document.querySelector("meta[property='og:description']")]
};

var keyBubbleObj = [bubble.url, bubble];

// so we can interact with bubble object in inspector
 window.bubble = bubble;

// making good progress but having issues contructing "object" to be passed to local.set, not taking objects or arrays
if (bubble.meta[0].content == undefined) {
  bubble.meta[0].content = "misc"; 
  chrome.storage.local.set({keyBubbleObj}, function() {
    // Notify that we saved.
    console.log("Bubble saved!");
  });
}
else {
  chrome.storage.local.set({keyBubbleObj}, function() {
    // Notify that we saved.
    console.log("Bubble saved!");
  });
};

// testing purposes

/*
console.log("Testing chrome.storage.local.get.");

for (key in chrome.storage.local) {
  chrome.storage.local.get(key, function(key) {
    console.log(key);
  });
};
*/

// also testing purposes
console.log("Give entire contents of storage.")

chrome.storage.local.get(null, function(items) {
    var allKeys = Object.keys(items);
    console.log(allKeys);
});

// clearing storage of all biznatch
console.log("Clearing storage of all content.")

chrome.storage.local.clear();

// try to read empty storage
console.log("Give entire contents of storage again.")

chrome.storage.local.get(null, function(items) {
    var allKeys = Object.keys(items);
    console.log(allKeys);
});