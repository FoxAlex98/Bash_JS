function getBash(iter){
    return '<div id="bash'+ iter +'" class="bash_body">\
    <div class="bash_bar">\
        <div class="bash_bar_draggable">\
        <span>bash'+ iter +'</span>\
        </div>\
        <div class="bash_bar_buttons">\
            <div class="close">\
                <img src="assets/img/boy-icon-dead.png" class="icon">\
            </div>\
            <div class="maximize">\
                <img src="assets/img/boy-icon-big.png" class="icon">\
            </div>\
            <div class="minimize">\
                <img src="assets/img/boy-icon-angry.png" class="icon">\
            </div>\
        </div>\
    </div>\
    <div class="bash">\
        <span>abitante@vault101:</span><input type="text" id="console" onKeyDown="check()"><br>\
    </div>\
</div>'
}

function getBashicon(iter){
    return '<div id="icon_bash' + iter+ '" class="logo_app_bar logo_bash">\
                <p>' + iter + '</p>\
            </div>' 
}

function print_console(){
    return "<span>abitante@vault101:</span><input type='text' id='console' onKeyDown='check()'><br>";
}
