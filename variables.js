var variableNames = ["jakesAge","crocodiles","gnomes","cabbages","dragons",
                     "experience","HP","coolness", "unicorns","dogs","cats"]
var variable;
var amount;
var changeMode;
var changeAmount;


function setup(){
    var c = createCanvas(750,500);
    c.parent("challenge");
    background(200,200,255);

    variable = variableNames[floor(random()*variableNames.length)];
    amount = floor(random()*100);
    changeMode = random()<0.5 ? "Increase" : "Decrease";
    changeAmount = floor(random()*20+1);
    noStroke()
    //textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Create a variable named " + variable + ".\n\n2) Set " + variable + " to " + 
         amount + ".\n\n3) " + changeMode + " " + variable + " by " + changeAmount + ".",
         10, 25, 730, 480);
}