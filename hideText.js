
(function( $ ) {
  $.fn.hideText= function(options) {
  	
  	var settings = $.extend( {
      'speed' : undefined,
      'dataName' : 'element'
    }, options);

  	this.click(function(e){
      var block = $(e.target).data(settings['dataName']);
        var row = $(block).parent();
        var rowHeight = row.css('height');
        if (rowHeight == '95px') {
            row.css('height', '67px');
        } else {
            row.css('height', '95px');

        }
      if (block === undefined) return;
      $(block).slideToggle(settings['speed'], function() {

          if ($(e.target).hasClass('sprite-hide_up')) {
              if ($(e.target).hasClass('title_link')) {
                  return;
              } else {
                  $(e.target).removeClass('sprite-hide_up');
              }
          } else {
              if ($(e.target).hasClass('title_link')) {
                  return;
              } else {
                  $(e.target).addClass('sprite-hide_up');

              }
          }
      });
  	});
  	
  	return this;
  };
})(jQuery);
