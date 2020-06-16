var bash_number = 1;
var actual_bash;

$( function() {
    $( ".terminal_icon" ).draggable();
    $( ".trash_icon" ).draggable();
  } );

function evidence(iter){
    $(".in_evidence").removeClass("in_evidence");
    console.log(typeof(iter));
    if(typeof(iter) == "string")
        $("#" + iter).addClass("in_evidence");
    else
        $("#bash" + iter).addClass("in_evidence");
}

function attachEventListener(iter) {
    $( function() {
        $("#bash" + iter).draggable({ handle: ".bash_bar_draggable" });
    });
    
    evidence(iter);

    $(".bash_body").mouseenter(function(){
        actual_bash = $(this).attr("id");
        //focus sulla cartella giusta
    });

    $(".bash_body").on('click', function(){
        
        actual_bash = $(this).attr("id");
        $("#" + actual_bash).focus();
        evidence(actual_bash);
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
        $("#bash" + iter).toggle();
        evidence(iter);
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



