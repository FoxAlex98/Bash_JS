var bash_number = 1;
var actual_bash;

$( function() {
    $( ".terminal_icon" ).draggable();
    $( ".trash_icon" ).draggable();
  } );

function attachEventListener(iter) {
    $( function() {
        $("#bash" + iter).draggable({ handle: ".bash_bar_draggable" });
    });

    $(".bash_body").mouseenter(function(){
        actual_bash = $(this).attr("id");
        //focus sulla cartella giusta
    });

    $(".bash_body").on('click', function(){
        actual_bash = $(this).attr("id");
        $("#" + actual_bash).focus();
        //focus sulla cartella giusta
    });

    $(".minimize").on('click', function(){
        $("#" + actual_bash).hide();
    });

    $(".maximize").on('click', function(){
        //$("#" + actual_bash).remove();
    });

    $(".close").on('click', function(){
        $("#" + actual_bash).remove();
        $("#icon_" + actual_bash).remove();
    });

    $("#icon_bash" + iter).on('click', function(){
        console.log("#icon_" + actual_bash);
        $("#bash" + iter).toggle();
    });

    
    /*
    $("#terminal").dblclick(function(){
        $(".desktop").append(getBash());
});*/
}

$("#terminal").dblclick(function(){
    $(".desktop").append(getBash(bash_number));
    $(".application_bar").append(getBashicon(bash_number));
    actual_bash = bash_number;
    attachEventListener(bash_number++);
});



