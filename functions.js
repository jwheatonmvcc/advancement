var functionNames = ["drawPlayer", "drawCoins", "drawWalls", "fireLasers","movePlayer"]
var f

function setup(){
    createCanvas(750,500);
    background(200,200,255);

    f = functionNames[floor(random()*functionNames.length)];
    
    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Create a function named " + f + ".\n\n2) Show how to call " + f + ".",
         10, -75, 730, 480);
}