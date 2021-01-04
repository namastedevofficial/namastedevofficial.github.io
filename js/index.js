console.log(`Hey Geek,

If you're interested in working with us, please reach out to me at akshaysaini.in@gmail.com

Cheers,
NamasteDev Team 🙏`);


$(".thank-you").hide();
submitBtn.addEventListener("click", function(){
  let email = nme.value;
  var link='https://docs.google.com/forms/d/e/1FAIpQLScP-knMdl8gJw-S-qgoPvNlikq7Qn_qnEatIGjpkoXWpBi7lg/formResponse';
  jQuery.ajax({
        url: link,
        data: {"entry.749522810" : email},
        type: "POST",
        dataType: "xml",
        crossDomain:true,
        statusCode: {
            0: function (){
                //console.log("response 0");
            },
            200: function (){
                  //console.log("response 200");
            }
        }
    });
  $(".email-form").hide();
  $(".thank-you").show('slow');
});

