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
        $('html, body').animate({
          scrollTop: $('#concept_page').offset().top
        }, 'slow');
      });
    });
  
    //lesson 1
    $('#next_button').click(function() {
      $('#concept_page').fadeOut('slow', function() {
        $('#lesson1_container').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#lesson1_container').offset().top
        }, 'slow');
      });
    });
  
    $('#back_to_concept').click(function() {
      $('#lesson1_container').fadeOut('slow', function() {
        $('#concept_page').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#concept_page').offset().top
        }, 'slow');
      });
    });
  
    //lesson 2
    $('#next_button2').click(function() {
      $('#lesson1_container').fadeOut('slow', function() {
        $('#lesson2_container').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#lesson2_container').offset().top
        }, 'slow');
      });
    });
  
    $('#back_to_concept1').click(function() {
      $('#lesson2_container').fadeOut('slow', function() {
        $('#lesson1_container').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#lesson1_container').offset().top
        }, 'slow');
      });
    });
  
    //lesson 3
    $('#next_button3').click(function() {
      $('#lesson2_container').fadeOut('slow', function() {
        $('#lesson3_container').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#lesson3_container').offset().top
        }, 'slow');
      });
    });
  
    $('#back_to_concept2').click(function() {
      $('#lesson3_container').fadeOut('slow', function() {
        $('#lesson2_container').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#lesson2_container').offset().top
        }, 'slow');
      });
    });
  
    //lesson4
    $('#next_button4').click(function() {
      $('#lesson3_container').fadeOut('slow', function() {
        $('#lesson4_container').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#lesson4_container').offset().top
        }, 'slow');
      });
    });
  
    $('#back_to_concept3').click(function() {
      $('#lesson4_container').fadeOut('slow', function() {
        $('#lesson3_container').fadeIn('slow');
        $('html, body').animate({
          scrollTop: $('#lesson3_container').offset().top
        }, 'slow');
      });
    });
  });
  