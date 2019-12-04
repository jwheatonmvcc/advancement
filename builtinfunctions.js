function setup(){
    createCanvas(750,500);
    background(200,200,255);

    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Show the draw function and explain what it does \n\n 2) Show the setup function and explain what it does",
         10, -50, 730, 480);
}


function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}