$('.st-accordian__heading').click(function(e){
  e.preventDefault();
  if (!$(this).hasClass('active')) {
    $('.st-accordian__heading').removeClass('active');
    $('.st-accordion__content').slideUp(500);
    $(this).addClass('active');
    $(this).next('.st-accordion__content').slideDown(500);
  }
  else if (jQuery(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next('.st-accordion__content').slideUp(500);
  }
});