$(document).ready(function(){
      $('.dropdown-submenu a.sub-drop').on("mouseenter", function(e){
        $(this).next('ul').show();
        e.stopPropagation();
        e.preventDefault();
      });
      $('.sub').on("mouseleave", function(e){
        $(this).hide();
        e.stopPropagation();
        e.preventDefault();
      });
      $('.dropdown-toggle').on("mouseenter", function(e){
        $('.sub').hide();
        e.stopPropagation();
        e.preventDefault();
      });
});