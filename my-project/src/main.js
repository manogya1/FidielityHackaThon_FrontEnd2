import $ from 'jquery';

$(document).ready(function() {
    $('#home_button').click(function() {
      $('#home_container').fadeOut('slow', function() {
        $('#concept_page').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#concept_page').offset().top
        }, 'slow');
      });
    });
  
    $('#back_to_home').click(function() {
      $('#concept_page').fadeOut('slow', function() {
        $('#home_container').fadeIn('slow');
      });
    });
  });