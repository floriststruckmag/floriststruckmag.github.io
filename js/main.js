
$(document).ready(function() {
  $(window).scroll(function(e) {
    var scrolledDist = $(this).scrollTop();
    if (scrolledDist > 220) {
      $('#logo-click').addClass('translated', 5000, 'fadeIn'); 
      $('img').addClass('translated-img', 5000, 'fadeIn'); 
      $('#logo').addClass('translated-container', 5000, 'fadeIn');   
      if (scrolledDist > 320) {
        $('#logo').addClass('sticky');
        $('#nav-0').show();
        $('#nav-1').show();
        $('#nav-2').show();
        $('#nav-3').show();
        $('#nav-4').show();
      } else {
        $('#logo').removeClass('sticky');
        $('#nav-0').hide();
        $('#nav-1').hide();
        $('#nav-2').hide();
        $('#nav-3').hide();
        $('#nav-4').hide();
      }
    } else {
      $('#logo-click').removeClass('translated', 5000, 'fadeIn');
      $('#logo').removeClass('translated-container', 5000, 'fadeIn');   
      $('img').removeClass('translated-img', 5000, 'fadeIn');  
      $('#logo-click').removeClass('sticky');
      $('#logo').removeClass('sticky-container');
      $('img').removeClass('sticky-img');
    }
  })
})


/*
$(document).ready(function() {
  $('#logo').css('position', 'fixed !important');    
})
*/
