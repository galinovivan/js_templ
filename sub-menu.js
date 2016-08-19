$(document).ready(function() {
   $.fn.subMenu = function(options) {
       var settings = $.extend( {

       }, options);
     this.click(function(e) {
         var sub = $('[data-element=sub]');
         var toggle = $('[data-toggle=angle]');
         if (sub.hasClass('active_sub')) {
             sub.removeClass('active_sub');
             toggle.removeClass('fa-angle-up');
             toggle.addClass('fa-angle-down');
         } else {
             sub.addClass('active_sub');
             toggle.removeClass('fa-angle-down');
             toggle.addClass('fa-angle-up');
         }
     })
   };
    $('.bottom_sub_menu').subMenu();
});