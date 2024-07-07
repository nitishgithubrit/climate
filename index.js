$(document).ready(function() {
  // Smooth scrolling for all links with hashes
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
    // Check if the clicked link is for a hash value
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      // Get the hash value to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      // Scroll to the target if it exists
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = target.selector;
        });
      }
    }
  });

  

  // Scroll-to-top button
  $('<button/>', {
    text: '⬆️',
    id: 'scrollTopButton',
    title: 'Scroll to top',
    css: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      display: 'none',
      padding: '10px',
      'background-color': '#28a745',
      color: 'white',
      border: 'none',
      'border-radius': '50%',
      'box-shadow': '0 4px 8px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      'z-index': 1000
    },
    click: function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    }
  }).appendTo('body');

  // Show scroll-to-top button on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scrollTopButton').fadeIn();
    } else {
      $('#scrollTopButton').fadeOut();
    }
  });

  // Fade in list items on scroll (if needed for specific sections)
  // Adjust as per your specific section IDs and structure
  $(window).scroll(function() {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    
    // Example: Fade in list items inside #trainer-info on scroll
    $('#trainer-info ul li').each(function() {
      var position = $(this).offset().top;
      
      if (position < scrollPos + windowHeight - 100) {
        $(this).addClass('visible');
      }
    });
  });

  // Initialize carousels (if used)
  $('.carousel').carousel({
    interval: 3000,
    ride: 'carousel'
  });
});
