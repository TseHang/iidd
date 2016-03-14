$('#mask_3').on('click',function(e){

	$('#third').css("display","block");

	$('html,body').animate({
    	scrollTop: $('#third').offset().top
    },800 );
})

$('#submit_button').on('click',function(){
	window.alert("What are u fucking doing!");
});

$('#noAccount_button').on('click',function(){
	window.alert("Are u crazy ? Shit!");
});

function alert(){
	window.alert("Shit! 這還沒好～～");
}