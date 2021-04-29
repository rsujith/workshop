$(document).ready(function(){
	console.log("hi")
	$(window).scroll(function(){
		if(this.scrollY >1){
			console.log("hi")
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky")

		}
	})
	//toggle bar
	$('.menu-btn').click(function(){
		$('.navbar .options').toggleClass("active")
		$('.menu-btn i').toggleClass("active");
		
	}); 
})
