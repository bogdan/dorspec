(function($) {
  var allSlides = function() {
    return $('#slides #track > div');
  }

  $(document).ready(function() {
    $("#slides").bind("click", function(event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      return true;
    });
  });


})(jQuery)
