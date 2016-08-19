$(document).ready(function() {
   
    initMenu($('#headerMobileMenu'), $('#topMenuToggle'), $('#closeMenuToggle'), 'active');
    function initMenu(menu, openToggle, closeToggle, newClass) {
       function initCollapse() {
           if (menu.hasClass(newClass)) {
               menu.removeClass(newClass);
           } else {
               menu.addClass(newClass);
           }
       }
       openToggle.click(function(event) {
           initCollapse();
           event.preventDefault();
       });
        openToggle.on('tap', function(event) {
            initCollapse();
            event.preventDefault();
        });
        if (closeToggle != false) {
            closeToggle.click(function (event) {
                initCollapse();
                event.preventDefault(event);
            });
            closeToggle.on('tap', function (event) {
                initCollapse();
                event.preventDefault();
            })
        } else {

            return;
        }
   };
    initMenu($('.progress_hide'), $('#hideArrowPrice'), false, 'hide_section');
    initMenu($('.product_form'), $('#hideArrowProduct'), false, 'hide_section');
    $('.arrow_dropdown').click(function() {
        if ($(this).hasClass('fa-angle-up')) {
            $(this).addClass('fa-angle-down');
            $(this).removeClass('fa-angle-up');
        } else {
            $(this).removeClass('fa-angle-down');
            $(this).addClass('fa-angle-up');
        }
    })


});