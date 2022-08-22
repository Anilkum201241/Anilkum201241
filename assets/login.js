function closeUsrFunction() {
  document.getElementById("checkuserModal").style.display = "none";
}

if ($("#errors").hasClass("errors")) {
  $.ajax({
      type: "POST",
      url: "https://api.korresfamily.com/api/v1/profileapi/attempt",
      async:false,
      dataType: 'json',
      data: {
          "email":email,
          "attempt": true
      },
      success: function(data){
        console.log('nice');  
      },
      error: function(res){
        console.log('wrong');  
      }
  });
}

$(document).ready(function(){
  $(".btn-login").click(function() {
    var email = $('#login_email').val();
    var url = "https://api.korresfamily.com/api/v1/profileapi/checkuserstatus?email="+email;
	
     $.ajax({
        type: "POST",
        url: "https://api.korresfamily.com/api/v1/profileapi/checkuserstatus",
        async:false,
        dataType: 'json',
        data: {
          	"email":email
        },
        success: function(data){
          if(data.status == 0){
          	$('.getDidata').html(data.message);
            $('.checkuser-modal').show(); 
          } else{ 
            $('.login-prime-checker input[type="submit"]').trigger('click');	  
          }
        },
        error: function(res){
          setTimeout(function(e){
          	location.reload();
          },500);
        }
      });

  });  
});
