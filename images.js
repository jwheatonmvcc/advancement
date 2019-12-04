var images = []

var i;

function preload(){
        images = [loadImage("//d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/039/100/original/gameDesign.png"),
             loadImage("Images/helicopter.png"),
              loadImage("Images/CakeEater.png"),
              loadImage("Images/fish.png"),
              loadImage("Images/house.png"),
              loadImage("Images/snake.png"),
              loadImage("Images/sideScroller.png"),
              ]
}

function setup(){
    createCanvas(750,500);
    background(200,200,255);

    i = removeRandom(images);

    strokeWeight(2);
    rect(225,180,300,300)
    image(i,225,180,300,300)
    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Show the steps required in javaScript to display the following image:",
         10, -150, 730, 480);
    
    
}


function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}