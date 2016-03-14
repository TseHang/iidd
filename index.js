$('#traditionalFood').on('click',function(e){

	$('#third').css("display","block");

	$('html,body').animate({
    	scrollTop: $('#third').offset().top
    },800 );
})