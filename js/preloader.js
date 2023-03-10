$(window).on('load', function () {
	$('#loading').addClass('fadeOut');
  setTimeout(function() {
    $('.preloader').hide(); /* hide the preloader after it has faded out */
  }, 1000); /* wait for 1 second before hiding */
});

