var fakeLocation = 'http://www.example.com/index.php';

$('.nav a').each(function () {
  // get the absolute URL from the <a> element:
  var href = this.href,
      // get the current page and file-type:
      pageAndFile = href.split('/').pop();
  // if the location ends with the pageAndFile found in
  // the current <a> element (using String.prototype.endsWith())
  // we add the 'active' class-name:
  if (fakeLocation.endsWith(pageAndFile)) {
    $(this).closest('li').addClass('active');
  }
});