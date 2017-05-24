;$(function(){
	var sidebar=$('#sidebar'),
		mask=$('.mask'),
		backtop=$('.backtop'),
		sidebar_trigger=$('#sidebar_trigger');

	sidebar_trigger.on('click',showSidebar);
	mask.on('click',hideSidebar);

	function showSidebar(){
		mask.fadeIn();
		sidebar.animate({right:0},500);
	};
	function hideSidebar(){
		mask.fadeOut();
		sidebar.animate({'right':-(sidebar.width())},500);
	};
	backtop.on('click',function(){
		$('html,body').animate({scrollTop:0}, 800);
	});
	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height()){
			backtop.fadeIn();
		}else {
			backtop.fadeOut();
		}
	});
	// $(window).trigger('scroll');//网页加载，直接触发scroll事件；
});