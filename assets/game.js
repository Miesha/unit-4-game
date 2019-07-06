$(document).ready(function(){
 console.log("ready")
})


var computerGuess = 0; 
var gem1;
var gem2;
var gem3;
var gem4;
var wins = 0;
var losses = 0;
var totalScore =[];


document.getElementById("wins").innerHTML = wins;
    console.log(wins)

document.getElementById("losses").innerHTML = losses;
    console.log(losses)

var computerGuess=(Math.floor(Math.random() * ((120 - 19) + 1)) + 19)
console.log("computerGuess : " +  computerGuess)

    document.getElementById("computerGuess").innerHTML = computerGuess;
    console.log(computerGuess)



gem1=(Math.floor(Math.random() * ((30 - 5) + 1)) + 5)
 console.log("gem1 : " + gem1)

gem2=(Math.floor(Math.random() * ((15 - 4) + 1)) + 4)
  console.log("gem2 : " + gem2)

gem3=(Math.floor(Math.random() * ((20 - 2) + 1)) + 2)
  console.log("gem3 : " + gem3)

gem4=(Math.floor(Math.random() * ((10 - 1) + 1)) + 1)
  console.log("gem4 : " + gem4)

    






$('#gem1').on('click', function(){

    // gem1=(Math.floor(Math.random() * ((30 - 5) + 1)) + 5)
        console.log("gem1 : " + gem1);
    
    totalScore.push(gem1)
        // console.log (totalScore + "this is the new score")
  

})

$('#gem2').on('click', function(){

    // gem2=(Math.floor(Math.random() * ((15 - 4) + 1)) + 4)
        console.log("gem2 : " + gem2);

    totalScore.push(gem2)
        // console.log (totalScore + "this is the new score")
})

$('#gem3').on('click', function(){

    // gem3=(Math.floor(Math.random() * ((20 - 2) + 1)) + 2)
        console.log("gem3 : " + gem3);

    totalScore.push(gem3)
        // console.log (totalScore + "this is the new score")
  
})

$('#gem4').on('click', function(){

    // gem4=(Math.floor(Math.random() * ((10 - 1) + 1)) + 1)
        console.log("gem4 : " + gem4);
    totalScore.push(gem4)
        // console.log (totalScore + "this is the new score")

        var crystalTotal = [...totalScore];
        console.log(crystalTotal + "cs")
          

})

$('#gems').on("click", function(){
    // console.log("ts" + totalScore)
   var numbers = [...totalScore]
   var sum = 0;
   for (var i = 0; i < numbers.length; i++){
    sum += numbers[i]
       console.log("please work:" + sum);
    document.getElementById("yourGuess").innerHTML = sum;

    if (sum === computerGuess ) {
        alert( "You successully completed the crystal challenge!");
        wins++;
        document.getElementById("wins").innerHTML = wins;
            console.log("wins:" + wins);
    }

    else if (sum > computerGuess) {
        
        alert( "Sorry " + sum + " is more than " + computerGuess + ". You have failed this challenge, try again.")
        losses++;
        document.getElementById("losses").innerHTML = losses;         
            console.log("losses  : " + losses);

    

    
    
   }


     
    
    
}
})
// var numbers = [10, 20, 30, 40] // sums to 100
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }
 
// myVar = doStuff(5);  
// console.log(myVar); // logs 27.5

// function doStuff(int) {  
//   var myNumber = int;
//   var halfNumber = myNumber / 2
//   myNumber = halfNumber + myNumber * 3;
//   myNumber += 10;
//   return myNumber;
// }


    
 



// var total = 0;
//     for (var i = 0; i < totalScore.length; i++) {
//     total += totalScore[i] << 0;
//     console.log("total :"  + total)

// }


//  done Random generated cpu number
//  done console log
//  done link to html

//  done Random generate number for each crystal
//  done crystals to on click
//  done console log 
//  done link to image

// done on click add 
// done Add crystal numbers to total score
// done console log 
// done display total score
   // DONE - SOMEHOW I GOT ALL OF THIS BELOW COMPLETED:
   /// REFERENCE LINES 92 -99
   //i need a function 
            // function
   // in that function i want 
            // function addCrystal (val){ }
   //crystal totals to equal a click event 
           // val crystal = 
   // each time this click even happens
//    // the crystal totals score should add the value of the crystal clicked. 

 


// done if crystal number matches cpu number 
// done add win
   // reset game

// done if crystal numbers total are more the cpu number 
// done add loss
   // reset game *keep losses total 


// QUESTIONS
// DO I NEED TO CITE IMAGES??
// How do I change the body's background image ? 







