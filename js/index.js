$(function() {
	$(".handler span").on("click", function() {
		$(this).addClass("choosen").siblings().removeClass("choosen");
		$(".slide")
			.eq($(this).index())
			.addClass("show")
			.siblings()
			.removeClass("show");
	});
});