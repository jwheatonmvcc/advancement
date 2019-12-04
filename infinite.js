var loops = ["var x = 10;\nwhile (x > 0) {\n    x++;\n}", "var y = 10;\nwhile (y > 0) {\n   y = y/2;\n}","var i = 0;\nwhile (i < 500) {\n   i+=50;\n}",
             "var i = 0;\nwhile (i < 500)\n   rect(i, 50, 100, 100);\n   i+=50;"]
var loop;


function setup(){
    createCanvas(750,500);
    background(200,200,255);

    loop = removeRandom(loops);
    
    noStroke()
    //textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Fix the following loop: \n\n" + loop,
         50, 50, 730, 480);
}



function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}