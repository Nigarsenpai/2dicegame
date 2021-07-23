if(window.performance.navigation.type===1){
    rollDice();
}
function rollDice(){

var RandomNumber1 = Math.floor(Math.random() * 6) +1;
var RandomDiceImage ="images/" + "dice" + RandomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", RandomDiceImage);

var RandomNumber2 = Math.floor(Math.random()* 6) + 1;
var RandomDiceImage2 = "images/dice" + RandomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", RandomDiceImage2);

var RandomNumber3 = Math.floor(Math.random()* 6) + 1;
var RandomDiceImage3 = "images/dice" + RandomNumber3 + ".png";
var image3 = document.querySelectorAll("img")[2].setAttribute("src", RandomDiceImage3);

var RandomNumber4 = Math.floor(Math.random()* 6) + 1;
var RandomDiceImage4 = "images/dice" + RandomNumber4 + ".png";
var image4 = document.querySelectorAll("img")[3].setAttribute("src", RandomDiceImage4);
var player1 = RandomNumber1 + RandomNumber2;
var player2 = RandomNumber3 + RandomNumber4;
changetitle(player1, player2)
};
function changetitle(player1, player2){
if(player1>player2){
   document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(player1<player2){
   document.querySelector("h1").innerHTML="Player 2 Wins!"
 }
else{
   document.querySelector("h1").innerHTML="Draw!"
}
}


