$(document).ready(function() {
	$(document).ready(function(){
		
		var $menu = $(".top-menu");
		
		$(window).scroll(function(){
		if ( $(this).scrollTop() > 50 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 50 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
		}
		});
	});

	$(function(){
		$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 400);
		return false;
		});
	});

	 var myDate = new Date();

 function returnEndDate(d,h,m){
	  myDate.setDate(myDate.getDate()+d);
	  myDate.setHours(myDate.getHours()+h);
	  myDate.setMinutes(myDate.getMinutes()+m);
	  return myDate;
	 }
	 
	 if($.cookie("lm2")){
	  var dateEnd = $.cookie("lm2");
	 }else{
	  var dateEnd = returnEndDate(0,0,0); 
	  $.cookie("lm2", dateEnd, {expires: 7});
	 }
});