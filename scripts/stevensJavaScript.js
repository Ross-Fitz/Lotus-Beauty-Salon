/*Steven (21130736) JavaScript*/
/*Promotion Game*/
/*Getting results from user and computer*/
let playCount=0;
let winCount=1;
let win=false;
function checkWin(clicked_id){
    var userChoice=clicked_id;
    var computerPick=pick();
    var result=compare(userChoice,computerPick);
    alert(result);
}
/*Creating a result for the computer to use*/
function pick(){
    var computerPick=Math.random();
    /*Assigned ids in intervals between 0 and 1 for computer options*/
    if(computerPick<0.1){
        computerPick="cream";
    }
    else if(computerPick<0.2){
        computerPick="hairbrush";
    }
    else if(computerPick<0.3){
        computerPick="hairdryer";
    }
    else if(computerPick<0.4){
        computerPick="lipstick";
    }
    else if(computerPick<0.5){
        computerPick="lotion";
    }
    else if(computerPick<0.6){
        computerPick="pedicure";
    }
    else if(computerPick<0.7){
        computerPick="seat";
    }
    else if(computerPick<0.8){
        computerPick="shampoo";
    }
    else if(computerPick<0.9){
        computerPick="straightener";
    }
    else{
        computerPick="zenstones";
    }
    return computerPick;
}
/*Return statements and different codes to customer*/
/*Different amount of clicks needed to give different values of discount*/
function compare(userChoice,computerPick){ 
    var result="You lose";
    /*Level 1*/
    if(userChoice==computerPick && playCount<=4 && winCount==1){
            result="Congrats, you have won 5% off. Next level is up to 10% off";
            win=true;
            winCount++;
        }
    else if(userChoice!=computerPick && playCount<=4 && winCount==1){
            result="Wrong answer! Try again";
        }
    else if(userChoice!=computerPick && playCount>4 && winCount==1){
        result="Wrong answer. You have run out of options. Resetting the game";
        winCount=1;
        playCount=0;
    }
    /*Level 2*/
    else if(userChoice==computerPick && playCount>4 && playCount<=9 && winCount==2){
        result="Congrats, you have won 10% off. Next level is up to 15% off";
        win=true;
        winCount++;
    }
    else if(userChoice!=computerPick && playCount>4 && playCount<=9 && winCount==2){
        result="Wrong answer! Try again";
    }
        else if(userChoice!=computerPick && playCount>4 && playCount>9 && winCount==2){
        result="Wrong answer. You have run out of options. Resetting the game";
        winCount=1;
        playCount=0;
    }
    /*Level 3*/
    else if(userChoice==computerPick && playCount>9 && playCount<=14 && winCount==3){
        result="Congrats, you have won 15% off. Next level is up to 20% off";
        win=true;
        winCount++;
    }
    else if(userChoice!=computerPick && playCount>9 && playCount<=14 && winCount==3){
        result="Wrong answer! Try again";
    }
        else if(userChoice!=computerPick && playCount>9 && playCount>14 && winCount==3){
        result="Wrong answer. You have run out of options. Resetting the game";
        winCount=1;
        playCount=0;
    }
    /*Level 4*/
    else if(userChoice==computerPick && playCount>14 && playCount<=19 && winCount==4){
        result="Congrats, you have won 20% off. Next level is up to 25% off";
        win=true;
        winCount++;
    }
    else if(userChoice!=computerPick && playCount>14 && playCount<=19 && winCount==4){
        result="Wrong answer! Try again";
    }
        else if(userChoice!=computerPick && playCount>14 && playCount>19 && winCount==4){
        result="Wrong answer. You have run out of options. Resetting the game";
        winCount=1;
        playCount=0;
    }
    /*Level 5*/
    else if(userChoice==computerPick && playCount>19 && playCount<=24 && winCount==5){
        result="Congrats, you have won 10% off. Next level is up to 15% off";
        win=true;
        winCount++;
    }
    else if(userChoice!=computerPick && playCount>19 && playCount<=24 && winCount==5){
        result="Wrong answer! Try again";
    }
        else if(userChoice!=computerPick && playCount>19 && playCount>24 && winCount==5){
        result="Wrong answer. You have run out of options. Resetting the game";
        winCount=1;
        playCount=0;
    }
    else{
        result="Nope, wrong answer, try again";
        }
    playCount++;
    clickAndWin();
    endGame();
    return result;
}
function clickAndWin(){
    let messClickAndWin="Number of Clicks: "+playCount+" out of "+winCount*5+"</br> Level Number: "+winCount;
    document.getElementById("clickResults").innerHTML=messClickAndWin;
}
/*Returning results to the page*/
function endGame(){
    let winStatus="lost";
    if(win==true){
        winStatus="won";
    }
    let codeVoc="";
    let codeNumber=Math.floor(Math.random()*100000000)+1000000;
    if(winCount==2){
        codeVoc="Here is 5% off! Code: "+codeNumber;
    }
    else if(winCount==3){
        codeVoc="Here is 10% off! Code: "+codeNumber;
    }
    else if(winCount==4){
        codeVoc="Here is 15% off! Code: "+codeNumber;
    }
    else if(winCount==5){
        codeVoc="Here is 20% off! Code: "+codeNumber;
    }
    else if(winCount==6){
        codeVoc="Here is 25% off! Code: "+codeNumber;
    }
    else{
        codeVoc="";
    }
    let endProGame="It took "+playCount+" changes but you have "+winStatus+". </br>"+codeVoc+"</br>Note: Only one code can be used on one booking at a time";
    document.getElementById("endGameMessage").innerHTML=endProGame;
}

/*Video Player JavaScript*/
/*Load the player*/
document.addEventListener("DOMContentLoaded", function() {startplayer();},false);
var player;
function startplayer(){
    player=document.getElementById("videoPlayer");
    //player.controls=false;
}
/*Play function*/
function playVideo(){
    player.play();
}
/*Pause function*/
function pauseVideo(){
    player.pause();
}
/*Stop function*/
function stopVideo(){
    player.pause();
    player.currentTime=0;
}
/*Carosel JavaScript*/
/*Carosel Images on Teams page*/
var slidePosition = 1;
SlideShow(slidePosition);
// Forward and Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}
//Image controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}
function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}