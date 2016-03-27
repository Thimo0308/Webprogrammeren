$(document).ready(function(){
    $(".addvriend1").click(function(){
        $(".addvriend4").show();
        $(".addvriend1").hide();
    });
});

$(document).ready(function(){
    $(".addvriend2").click(function(){
        $(".addvriend5").show();
        $(".addvriend2").hide();
    });
});


$(document).ready(function(){
    $(".addvriend4").click(function(){
        $(".addvriend6").show();
        $(".addvriend4").hide();
    });
});
$(document).ready(function(){
    $(".addvriend4").click(function(){
        $(".addvriend4").hide();
    });
});

$(document).ready(function(){
    $(".addvriend5").click(function(){
        $(".addvriend5").hide();
    });
});

$(document).ready(function(){
    $(".addvriend6").click(function(){
        $(".addvriend6").hide();
    });
});


$(document).ready(function(){
    $(".addvriend7").click(function(){
        $(".addvriend7").hide();
    });
});

$(document).ready(function(){
    $(".addvriend8").click(function(){
        $(".addvriend8").hide();
    });
});
$(document).ready(function(){
    $(".addvriend9").click(function(){
        $(".addvriend9").hide();
    });
});
$(document).ready(function(){
    $(".addvriend10").click(function(){
        $(".addvriend10").hide();
    });
});
$(document).ready(function(){
    $(".addvriend11").click(function(){
        $(".addvriend11").hide();
    });
});
$(document).ready(function(){
    $(".addvriend12").click(function(){
        $(".addvriend12").hide();
    });
});
$(document).ready(function(){
    $(".addvriend13").click(function(){
        $(".addvriend13").hide();
    });
});
$(document).ready(function(){
    $(".addvriend14").click(function(){
        $(".addvriend14").hide();
    });
});

$(document).ready(function(){
    
        
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.profile-pic').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $(".file-upload").change(function(){
            readURL(this);
        });
});

var i = 0;

function inloggen() {

	var gb = myForm.elements["gb"].value;
	var ww = myForm.elements["ww"].value;

	var gbArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "Jens"];
		

	for(var j = 0; j < gbArray.length; j++) {
		if(gb == gbArray[j] && ww == "Hoi") {
			document.getElementById("demo").innerHTML
			location.href="../html/timeline.html";
		}
	}

	if(gb == "" && ww == ""){
		document.getElementById("demo").innerHTML = ("U heeft geen gebruikersnaam en/of wachtwoord ingevuld!")
		$( "#demo" ).effect( "shake" )

		i++;
		}
	
	else{
		document.getElementById("demo").innerHTML = ("U heeft een onjuiste gebruikersnaam en/of wachtwoord ingevuld!")
		$( "#demo" ).effect( "shake" )

		i++;
		}

		if(i>2){
			document.getElementById("demo").innerHTML = ("U heeft 3x onjuiste gegevens ingevuld en kunt niet meer inloggen!")
			$("button").hide();
			$("input").prop('disabled', true);
		}
}
	
	var filledInFields = 6

	function reg(){
		var gb2 = myForm.elements["gb2"].value;

		var gbArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "Jens"];
	
		for(var j = 0; j < gbArray.length; j++) {
			if(gb2 == gbArray[j]) {
				document.getElementById("demo").innerHTML = ("Deze gebruikersnaam is al in gebruik");
				$( "#demo" ).effect( "shake" )
				filledInFields--;
			}
		}

	$(".requiredAttr").each(function(){
		if ($(this).val().length < 1){
		   document.getElementById("demo").innerHTML = ("U heeft niet alle invoervelden ingevuld")
		   filledInFields--;
        }	

   	 })
	
		if(filledInFields == 6){
			location.href="../html/timeline.html";
		}
	}


	function checkPass(){

   	  	var pass1 = document.getElementById('pass1');
    	var pass2 = document.getElementById('pass2');

   		var message = document.getElementById('confirmMessage');

    	var goodColor = "#66cc66";
    	var badColor = "#ff6666";


    	if(pass1.value == pass2.value){

       		pass2.style.backgroundColor = goodColor;
        	message.style.color = goodColor;
        	message.innerHTML = "Wachtwoord komt overeen!"
    	}else{

       		pass2.style.backgroundColor = badColor;
        	message.style.color = badColor;
        	message.innerHTML = "Wachtwoord komt niet overeen!"
    	}
	}  

//message plaatsen

$(document).ready(function(){

	// voeg Bericht toe
	$(".addBericht").click(function() {
		var input = $("#inputBericht").val();

		var inputIsEmpty = $.trim($('#inputBericht').val());

			if(inputIsEmpty.length !== 0) {
				var bericht = "<div class='bericht'><div class='omschrijving'>"+input+"</div><div class='waardering'><div class='likes'>1</div><div class=''><a href='#' class='removeBericht'>Verwijder bericht</a><a href='#' class='addLike'>Ik vind dit bericht leuk</a></div></div><div class='addComments'><input type='text' class='inputComment' placeholder='Reageer op dit bericht ..'/><button class='addComment'>Reageer op dit bericht</button></div><div class='comments'></div>";
				$("#berichten").prepend(bericht);
			// input field wordt geleegd
			$("#inputBericht").val('');
			$("#error").text('');
		} else {
			$("#error").text('Het veld is niet ingevuld.');
		}
	});



	// like het bericht
	$("body").on("click", ".addLike", function(){
		var likes = $(this).parent().siblings(".likes").text();
		likes++;
		$(this).parent().siblings(".likes").text(likes);
	});

	// reageer op het bericht
	$("body").on("click", ".addComment", function(){
		var input = $(this).siblings(".inputComment").val();

		var inputCommentIsEmpty = $.trim($(this).siblings(".inputComment").val());

			if(inputCommentIsEmpty.length !== 0) {
				var comment = "<div class='comment'><div class='message'>"+input+"</div><div class='commentControl'><a href='#' class='removeComment'>Verwijder</a></div></div>";
				$(this).parent().siblings(".comments").append(comment);

				$(this).siblings(".inputComment").val('');
				$("#error").text('');
			} else {
				$("#error").text('Het veld is niet ingevuld.');
			}
	});				

	// verwijder comment
	$("body").on("click", "a.removeComment", function(){
		$(this).closest('.comment').remove();
	});

	// verwijder bericht

	$("body").on("click", "a.removeBericht", function(){
		$(this).closest('.bericht').remove();
	});

});






/*
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
*/
    	//registreren

	
//vriendlijst
    $(".adddate6").click(function(){
        $(".adddate6").hide();
    });

    $(".adddate7").click(function(){
        $(".adddate7").hide();
    });

    $(".adddate8").click(function(){
        $(".adddate8").hide();
    });

    $(".adddate9").click(function(){
        $(".adddate9").hide();
    });

    $(".adddate10").click(function(){
        $(".adddate10").hide();
    });

    $(".adddate11").click(function(){
        $(".adddate11").hide();
    });

    $(".adddate12").click(function(){
        $(".adddate12").hide();
    });

    $(".adddate13").click(function(){
        $(".adddate13").hide();
    });


    $(".adddate14").click(function(){
        $(".adddate14").hide();
    });

//chatten
$('.chat_head').click(function(){
  $('.chat_body').slideToggle('slow');
 });
 $('.msg_head').click(function(){
  $('.msg_wrap').slideToggle('slow');
 });
 
 $('.close').click(function(){
  $('.msg_box').hide();
 });
 
 $('.user').click(function(){

  $('.msg_wrap').show();
  $('.msg_box').show();
 });
 
 $('textarea').keypress(
    function(e){
        if (e.keyCode == 13) {
            var msg = $(this).val();
   $(this).val('');
   if(msg!='')
   $('<div class="msg_b">'+msg+'</div>').insertBefore('.msg_push');
   $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
        }
    });

//sidebar

$(document).ready(function(){
$('#sidebar-btn').click(function(){
	$('#sidebar').toggleClass('visible');
});
	//chat

	$('.chat_head').click(function(){
  $('.chat_body').slideToggle('slow');
 });
 $('.msg_head').click(function(){
  $('.msg_wrap').slideToggle('slow');
 });
 
 $('.close').click(function(){
  $('.msg_box').hide();
 });
 
 $('.user').click(function(){

  $('.msg_wrap').show();
  $('.msg_box').show();
 });

$(document).ready(function(){

$(".addChatBericht").click(function() {
    var input = $("#inputChatBericht").val();
    
    var inputChatIsEmpty = $.trim($('#inputChatBericht').val());

    if(inputChatIsEmpty.length !== 0) {
        var chatbericht = "<div class='chatbericht_right'><div class='omschrijving'>Jij zegt: <br>"+input+"</div></div>";
        $("#berichtenvenster").append(chatbericht);

    $("#inputChatBericht").val('');
    $("#error").text('');
} else {
    $("#error").text('Het veld is niet ingevuld.');
}
});


});

});
