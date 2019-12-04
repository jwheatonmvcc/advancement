var conditionNames = ["x is less than 10", "y is greater than 500", "score is greater than highscore", "lives are less than 0", "points are equal to 7",
                      "wallTimer is equal to 0"]
var condition;


function setup(){
    createCanvas(750,500);
    background(200,200,255);

    condition = removeRandom(conditionNames);
    
    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Create a while loop which calls the game.update() function until " + condition + 
         ".\n\nYou can assume all variables are already declared",
         10, -50, 730, 480);
}



function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}