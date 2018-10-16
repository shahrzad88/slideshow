var images = ['images/elektra.jpg', 'images/wonder_woman.jpg', 'images/cat_woman.jpg', 'images/black_widow.jpg'];
var showImage;
var count = 0;
$("#start").on('click', startSlideshow);
$("#stop").on('click', stopSlideshow);

function displayImage() {
  $("#image-holder").html('<img src=' + images[count] + ' width="400px" height="500px" alt="Super Woman">');
}

function nextImage() {
  count++;
  $("#image-holder").html('<img src="images/loading.gif" width="400px" height="400px" alt="Super Woman">');
  setTimeout(displayImage, 1000);
  count = (count === images.length) ? 0 : count;
  console.log(count);
}

function startSlideshow() {
  showImage = setInterval(nextImage, 4000);
}

function stopSlideshow() {
  clearInterval(showImage);
}

displayImage();
