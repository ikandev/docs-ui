/* eslint-disable */
// Needs an item with: id="js-toolbar-pdf-doc" in the html document to work
document.addEventListener('DOMContentLoaded', function(event) {

  var urlBase = window.location.hostname;
  var urlProtocol = window.location.protocol + "//";
  var linkElement = document.getElementsByTagName('link');
  var linkUrl = '';

  for (var i = 0; i < linkElement.length; i++) {
    if (linkElement[i].getAttribute("rel") === "canonical") {
      linkUrl = linkElement[i].getAttribute("href");
    }  
  }

  if (linkUrl !== '') {
    // Remove first and last part of url and split in document name and version    
    linkUrl = linkUrl.replace(/http[s]*:\/\/[a-zA-Z]*\.[a-zA-Z]*\.[a-zA-Z]*\//gm, '');
    linkUrl = linkUrl.replace(/\/[a-zA-Z_]*.html/gm, '');
    linkUrl = linkUrl.replace('/', '_') + '.pdf';

    // Ajax call
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("js-toolbar-pdf-doc").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", urlProtocol + urlBase + "/pdf/search-pdf-doc.php?doc=" + linkUrl, true);
    xhttp.send();
  }
});
