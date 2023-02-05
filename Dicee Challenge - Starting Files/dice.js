var diceImage=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var diceValue1=Math.floor(Math.random()*diceImage.length);
var diceValue2=Math.floor(Math.random()*diceImage.length);
document.querySelector(".img1").src="images/"+diceImage[diceValue1];
document.querySelector(".img2").src="images/"+diceImage[diceValue2];
document.querySelector(".Player1").textContent="Player 1 rolled a "+(diceValue1+1);
document.querySelector(".Player2").textContent="Player 2 rolled a "+(diceValue2+1);


if(diceValue1>diceValue2)
{
  document.querySelector(".Title").textContent ="🚩Player 1 won!";
}
else if (diceValue1<diceValue2)
{
  document.querySelector(".Title").textContent ="Player 2 won!🚩";
}
else
{
  document.querySelector(".Title").textContent ="🚩Draw🚩";
}

