$(".st-vertical-tab__content a").click(function(e){
  $(this).parents('.st-vertical-tab__wrap').find('.st-vertical-tab__content a').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
  let tabId = $(this).data('target');
  $(this).parents('.st-vertical-tab__wrap').find(".st-vertical-tab__image").removeClass('show');
  $(this).parents('.st-vertical-tab__wrap').find(".st-vertical-tab__image").hide();
  $(this).parents('.st-vertical-tab__wrap').find(".st-vertical-tab__image").each(function(){
    if($(this).attr('id') == tabId) {
      $(this).fadeIn();
      $(this).addClass('show');
    }
  });
});
