var num=6;
var colors= generateRandomColors(num);
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");

var squares = document.querySelectorAll(".square")
var messageDisplay= document.querySelector("#message");

var colorDisplay= document.getElementById("colorDisplay");

var pickedColor= pickColor();

var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  num =3;
  easyBtn.classList.add("selected");
  messageDisplay.textContent="";
  hardBtn.classList.remove("selected");
  colors = generateRandomColors(num);
  pickedColor= pickColor();
  h1.style.backgroundColor="steelblue";
  colorDisplay.textContent= pickedColor;
  for(var i=0;i<squares.length;i++){
    // add initial colors to squares
    if(colors[i]){
     squares[i].style.backgroundColor=colors[i];
    }
    else{
        squares[i].style.display="none";
    }
}
});

hardBtn.addEventListener("click", function(){
    num=6;
    easyBtn.classList.remove("selected");
    messageDisplay.textContent="";
  hardBtn.classList.add("selected");
  colors = generateRandomColors(num);
  pickedColor= pickColor();
  h1.style.backgroundColor="steelblue";
  colorDisplay.textContent= pickedColor;
  for(var i=0;i<squares.length;i++){
    // add initial colors to squares
     squares[i].style.backgroundColor=colors[i];
     squares[i].style.display="block";
 }
});

colorDisplay.textContent= pickedColor;

resetButton.addEventListener("click", function(){
    colors= generateRandomColors(num);
    pickedColor= pickColor();
    colorDisplay.textContent= pickedColor;
    h1.style.backgroundColor="steelblue";
    for(var i=0;i<squares.length;i++){
        // add initial colors to squares
        squares[i].style.backgroundColor=colors[i];
    }
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";
    

});

for(var i=0;i<squares.length;i++){
    // add initial colors to squares
    squares[i].style.backgroundColor=colors[i];

    //add click listeners
    squares[i].addEventListener("click", function(){
       var clickedColor=this.style.backgroundColor;
       if(clickedColor===pickedColor){
            changeColors(clickedColor);
            messageDisplay.textContent="Correct!";
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play again?";
       }
       else{
           this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!";
       }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random =Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
       arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
// pick red green blue from 0-255
var r= Math.floor(Math.random()*256)
var g= Math.floor(Math.random()*256)
var b= Math.floor(Math.random()*256)
return "rgb("+ r + ", "+ g +", "+ b +")";
}