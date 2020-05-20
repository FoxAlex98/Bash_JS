function print_console(){
    return "<span>root@localhost:</span><input type='text' id='console' onKeyDown='check()'><br>";
}

function print_response(response){
    $("#console").removeAttr("id");
    $(".bash").append("<p>" + response + "</p>");
    $(".bash").append(print_console());
    document.getElementById("console").focus();
    /*
    document.getElementById("console").removeAttribute("id");
    var cons = document.getElementById("bash");
    cons.insertAdjacentHTML("beforeend" , "<p>" + response + "</p>" + print_console());
    document.getElementById("console").focus();
    */
}

var history;

function clear(){
    $(".bash").html(print_console());
    $("#")
}

function controllo(comando){

    switch(comando){
        case "clear": clear();                      
                      break;
        case "ls":  print_response("non c'è nulla qui");
                    break;
        case "history": print_response("ti stampo la storia");
                    break;
        case "whoami": print_response("io sono root");
                    break;
        default:    print_response("comando " + comando + " non trovato"); 
                    break;
    }
}

function check() {
    if(event.keyCode == 13) {
        var pippo = document.getElementById("console").value;
        controllo(pippo);
        print_console();
    }   
}

