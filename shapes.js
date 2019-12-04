var shapeNames = ["Rectangle","Triangle","Oval","Circle","Square","Line"]
var shape


function setup(){
    createCanvas(750,500);
    background(200,200,255);

    shape = shapeNames[floor(random()*shapeNames.length)];

    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Show the JavaScript function you would use to draw a " + shape +
         "\n\n2) What does each number control in this function?",
         10, -50, 730, 480);
}