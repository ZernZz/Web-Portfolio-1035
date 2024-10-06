function timeStart(){
    var TIMER_TICK = 1000;
    var timer = null;
    var min = 0.5;
    var second = min * 60;
    var x = document.getElementById('clock');
    
    timer = setInterval(timeCount, TIMER_TICK);

    function timeCount(){
        second -= 1;
        x.innerHTML = second + " seconds";

        var allbox = document.querySelectorAll("#layer div");
        
        if (allbox.length === 0 && second > 0) {
            alert("You win!");
            clearInterval(timer);
            clearScreen();
        }
        else if (second <= 0 && allbox.length > 0) {
            alert("Game over!");
            clearInterval(timer);
            clearScreen();
        }
    }
}

function addBox(){
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box){
    box.onclick = function(){
        box.parentNode.removeChild(box);
    }
}

function clearScreen(){
    var allbox = document.querySelectorAll("#layer div");
    
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}

window.onload = pageLoad;

function pageLoad(){
    document.getElementById("start").onclick = startGame;
}

function startGame(){
    alert("Ready");
    addBox();
    timeStart();
}