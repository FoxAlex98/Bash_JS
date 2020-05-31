function print_console(){
    return "<span>abitante@localvault:</span><input type='text' id='console' onKeyDown='check()'><br>";
}

function print_response(response, idbash){
    $("#" + idbash +" input#console").removeAttr("id");
    $("#" + idbash +" .bash").append("<p>" + response + "</p>");
    $("#" + idbash +" .bash").append(print_console());
    $("#" + idbash +" input#console").focus();
}

var history;

function clear(idbash){
    $("#" + idbash + " > .bash").html(print_console());
    $("#" + idbash +" input#console").focus();
}

function controllo(comando,idbash){

    switch(comando){
        case "clear": clear(idbash);                      
                      break;
        case "ls":  print_response("non c'è nulla qui",idbash);
                    break;
        case "history": print_response("ti stampo la storia",idbash);
                    break;
        case "whoami": print_response("io sono root",idbash);
                    break;
        case "ciao banana": print_response("ciao, sono il tuo amico Pedro",idbash);
                    break;
        case "": print_response("",idbash);
                    break;
        default:    print_response("comando \"" + comando + "\" non trovato",idbash); 
                    break;
    }
}

function check() {
    if(event.keyCode == 13) {
        var comando = $("#" + actual_bash + " #console").val();
        controllo(comando, actual_bash);
        print_console();
    }   
}

$(document).ready(function() {
    console.log( "ready!" );
});
