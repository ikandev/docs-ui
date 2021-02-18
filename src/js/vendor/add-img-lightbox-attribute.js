/* eslint-disable */
/* Get all images from the main article element */
var images = document.querySelectorAll('article.doc img');
/* Assign attributes to them to enable lightbox */
for(var i = 0; i < images.length; i++) {
	/* If icons are detected do not assign the attributes */
	if ((images[i].src).indexOf('/icons/') === -1) {
	    images[i].style.cursor = "pointer"; 
	    images[i].setAttribute('data-jslghtbx','');
	}
}
var lightbox = new Lightbox();
lightbox.load();