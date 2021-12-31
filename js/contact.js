$(document).ready(function() {

    $("#alertSuccess").hide();
    $("#alertError").hide();
    $("#loading").hide();

});

$("#submit").click(function (){



    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let category = document.getElementById('category').value;

    var status = validateItemForm();
    if (status != true) {
        $("#alertError").text(status);
        $("#alertError").show();
        return;
    }

    let id = "contact";

    let dt = {
        id:id,
        name:name,
        email:email,
        message:message,
        category:category
    };

    $.ajax({
        url: 'data.php',
        type: 'POST',
        data: dt,
        beforeSend: function(){
            // $("#loading").show();
            $("#submit").attr("disabled", "disabled");
        },
        success:function (res){
            // console.log(res);
            if (res == 1){
                $("#alertError").hide();
                $("#alertSuccess").text("Your Inquiry added");
                $("#alertSuccess").fadeTo(2000, 500).slideUp(500, function() {
                    $("#alertSuccess").slideUp(500);
                });

                // $("#loading").hide();

                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
                document.getElementById('category').value = "";

                $("#submit").prop("disabled", false);

            }else {
                $("#alertError").text("Email not send");
                $("#alertError").fadeTo(2000, 500).slideUp(500, function() {
                    $("#alertError").slideUp(500);
                });
                $("#submit").prop("disabled", false);
            }
        },
        error: function (request, error) {
            console("Request " + JSON.stringify(error));
        }
    })

})

function validateItemForm() {

    if ($("#name").val().trim() == "") {
        return "Enter Name.";
    }

    if ($("#email").val().trim() == "") {
        return "Enter Email.";
    }

    if ($("#message").val().trim() == "") {
        return "Enter your message.";
    }
    return true;
}