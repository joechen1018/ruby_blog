var clientId = '182400835708-d7afrkm7u2vkrim0h6o3ob249q5mgep8.apps.googleusercontent.com';
//var clientId = "205449938055.apps.googleusercontent.com";
var scopes = 'https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.email';
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/client.js?onload=onGApiLoaded';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

var onGApiLoaded = function(){
	//console.log(gapi);
	$("a.oauth-signin").click(function(){
		gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, authorize);
		return false;
	});
}

var authorize = function(rs){
	console.log(rs);
	if (rs && !rs.error && rs["access_token"]) {
		token = rs["access_token"];

		//$("form.new_user").submit();
		$.ajax({
			url : "/users/sign_in",
			method : "POST",
			data : {
				user :　{
					email : "joe.9x9@gmail.com",
					password : "00000107"
				}
			}
		}).done(function(rs){
			console.log(rs);
		});
	} else {
		alert("login failed");	
	}
}