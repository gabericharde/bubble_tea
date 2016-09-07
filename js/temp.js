
var bubble = {
      "date": Date(),
      "title": document.title,
      "url": window.location.toString(),
      "domain": window.location.hostname,
      "meta": document.querySelector("meta[property='og:type']")
      };

console.log(bubble);