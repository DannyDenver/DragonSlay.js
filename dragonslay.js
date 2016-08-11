var slaying=true
var youHit=Math.floor(Math.random()*2)
var damageThisRound=Math.floor(Math.random()*5+1)
var totalDamage=0

while(slaying){
    if(youHit){console.log("Congrats! You killed the dragon!");
    totalDamage+=damageThisRound;
        if (totalDamage>=4){
            console.log("You slew the dragon!")}
        else{
            youHit=Math.floor(Math.random()*2);}}
    else{console.log("The dragon slayed you!");}
    slaying=false}
