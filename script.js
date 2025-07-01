let lives=10;
var guessNumber = Math.round(Math.random() * 100);

function findNumber(){
    let num = parseInt(document.getElementById('num').value);
    let msg=document.getElementById("msg");
    let live=document.getElementById("lives");
    let won=document.getElementById("won");

    console.log(guessNumber, "cssd");
    
    if(lives>=1){
    if(num<guessNumber){
        msg.innerHTML="Your guess is too low";
        lives--;
    }
    else if (num>guessNumber) {
        
       msg.innerHTML="Your guess is too high";
        lives--;

        
    } else {
        window.location.href="finish.html";
        won.innerHTML("Won the Game");


    }
    
        document.getElementById("lives").innerHTML=lives;
}

else if(lives==0){

        window.location.href="finish.html";
        won.innerHTML("lose the Game");
    }

    

}