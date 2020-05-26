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

    $(".bash").on('click', function(){
        actual_bash = $(this).closest('.bash_body').attr('id');
        //focus sulla cartella giusta
    });

    /*$(".close").on('click', function(){
        $("")
    });*/


    /*
    $("#terminal").dblclick(function(){
        $(".desktop").append(getBash());
});*/
}

$("#terminal").dblclick(function(){
    $(".desktop").append(getBash(bash_number));
    attachEventListener(bash_number++);
    
});



