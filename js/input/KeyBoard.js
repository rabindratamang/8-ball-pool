function handleKeyDown(event){
    if(event.keyCode === 87){
        if(!KeyBoard.strike.down)
             KeyBoard.strike.pressed = true;
        KeyBoard.strike.down = true; 
    }   
}

function handleKeyUp(event){
    if(event.keyCode === 87)
        KeyBoard.strike.down = false;
}

function KeyBoardHandler(){
    this.strike = new ButtonState();

    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
    document.onkeypress = handleKeypress;
}

KeyBoardHandler.prototype.reset = function(){
    this.strike.pressed = false;
}

let KeyBoard = new KeyBoardHandler();