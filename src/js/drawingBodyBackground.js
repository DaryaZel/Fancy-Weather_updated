export function drawingBodyBackground(imageLink) {
    let src = imageLink;
    let image = new Image();
    image.addEventListener('load', function () {
    document.body.style.backgroundImage = 'url(' + src + ')';
    document.querySelector('figure').style.display = 'none'
    });
    image.src = src;
  }