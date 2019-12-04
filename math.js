//Arithmetic: Multiplication/Division/Negatives/Decimals/Inequalities



function setup(){
    createCanvas(750,500);
    background(200,200,255);


    
    noStroke()
    //textAlign(CENTER,CENTER)

    textSize(40);
    text("Answer the following Math problems:\n\n1) " + floor(random(20)) + " multiplied by " + floor(random(20)) + " = ?\n2) "
         + floor(random(20)) + " divided by " + floor(random(3)+1) + " = ?\n (don't worry about remainder)\n\n3) "
         + floor(random(20)) + " + " + floor(random(-20)-1) + " = ?\n4) "
         + random(20).toFixed(1) + " - " + random(20).toFixed(1) + " = ?\n5) "
         + floor(random(-20,20)) + " > " + floor(random(-20,20)) + "?",
         30, 10, 730, 480);
}


function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}