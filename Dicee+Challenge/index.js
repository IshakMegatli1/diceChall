var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomDice1 = "/images/dice" +randomNumber1+".png";
var randomDice2 = "/images/dice" +randomNumber2+".png";

document.querySelector('.img1').setAttribute('src', randomDice1);
document.querySelector('.img2').setAttribute('src', randomDice2);


if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML ="player 1 wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "player 2 wins";
}
else {
    document.querySelector('h1').innerHTML = "DRAW";
}