var options = [
    {name:"pokemon", properties: ["size","HP","name","DEF","ATK"]},
    {name:"player", properties: ["size","x","y","speed","img"]},
    {name:"enemy", properties: ["size","x","y","speed","HP"]},
    {name:"coin", properties: ["size","x","y","isCollected","img"]},
    {name:"snowflake", properties: ["size","x","y","img","speed"]},
    {name:"fish", properties: ["x","y","w","h","xvel", "yvel"]},
]


var objectNames = ["pokemon","player","enemy","coin","snowflake","ship"]

var propertyNames = ["x","y","size","HP","name","DEF","ATK","color","Dir"]
var object;
var properties=[];

function setup(){
    createCanvas(750,500);
    background(200,200,255);
    var o =  removeRandom(options);
    object = o.name
    for(var i=0; i<3; i++){
        properties.push(removeRandom(o.properties))
    }
    
    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Create an object variable named " + object + " with properties: " + properties + ".\n\n2) Show how to access the " + 
         removeRandom(properties) + " property from the " + object + ".",
         10, -50, 730, 480);
}


function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}