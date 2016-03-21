$('#mask_3 a').on('click',function(e){

	$('#third').css("display","block");

	$('html,body').animate({
    	scrollTop: $('#third').offset().top
    },800 );
});

$('#submit_button').on('click', login) ;
$("#button_sign").on('click' , signUp) ;

$("#mask_1 a").on('click' , alert_shit);
$("#mask_2 a").on('click' , alert_shit);

function alert_shit(){
	window.alert("Shit! 這還沒好～～");
}


//帳號系統開始
var myDataRef = new Firebase('https://uiddhw1.firebaseio.com');
var person = myDataRef.child("person");

var i = 0;
var login_success = 0 ;

function signUp(){
	var name = $("#sign_nameInput").val();
	var where = $("#sign_fromInput").val();
	var psd = $("#sign_psdInput").val();

	person.push({
		'name': name  ,
		'where': where ,
		'psd': psd 
	});

	window.alert("恭喜 從"+where+" 的 "+name+" 註冊成功!");
	window.location.reload();
}

function login(){
	var name = $("#nameInput").val();
	var psd = $("#psdInput").val();

	person.once("value" , function(snapshot){
		snapshot.forEach(function(childSnapshot){
			var node_name = childSnapshot.child("name").val();
			var node_psd = childSnapshot.child("psd").val();
			if ( node_name == name && node_psd == psd){
				login_success = 1;
				$("#home_welcome p").html("Hello , <span style = \"color:white\">"+ name + "</span>!<br> Let's Fighting go and down!");
				$('#home_content_box').css("opacity" , 0);
			}

			console.log(node_name+ "1/n");
		});
		if (login_success == 1)
			window.alert("嗨！"+name+"早安～ 讓我們繼續闖關吧！");
		else{
			window.alert("查無此帳號或密碼錯誤！！");
			$("#nameInput").val("");
			$("#psdInput").val("");
		}
	})
	
}