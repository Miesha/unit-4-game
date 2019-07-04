$(document).ready(function(){
 console.log("ready")
})


var computerGuess; 
var gem1;
var gem2;
var gem3;
var gem4;
var wins
var losses
var totalScore

computerGuess=(Math.floor(Math.random() * ((120 - 19) + 1)) + 19)
console.log("computerGuess : " +  computerGuess)

gem1=(Math.floor(Math.random() * ((30 - 5) + 1)) + 5)
console.log("gem1 : " + gem1)

gem2=(Math.floor(Math.random() * ((15 - 4) + 1)) + 4)
console.log("gem2 : " + gem2)

gem3=(Math.floor(Math.random() * ((20 - 2) + 1)) + 2)
console.log("gem3 : " + gem3)

gem4=(Math.floor(Math.random() * ((10 - 1) + 1)) + 1)
console.log("gem4 : " + gem4)


$('#gem1').on('click', function(){
    console.log('gem1: '+ gem1);

})

$('#gem2').on('click', function(){
    console.log('gem2: '+ gem2);

})

$('#gem3').on('click', function(){
    console.log('gem3: '+ gem3);

})

$('#gem4').on('click', function(){
    console.log('gem4: '+ gem4);

})


function addgems (val) {

}





// var gem1 = document.getElementById("gem1");

    // $(".btn btn-primary").click(function(){
    //     $(this).val(gem1)
    //     console.log("button: " + gem1)
    // })



    


//  done Random generated cpu number
//  done console log
//  done link to html

//  done Random generate number for each crystal
//  done crystals to on click
//  done console log 
//  done link to image

// on click add 
//Add crystal numbers to total score
//console log 
// display total score


// if crystal number matches cpu number 
// add win
   // reset game

// if crystal numbers total are more the cpu number 
// add loss
   // reset game *keep losses total 


// QUESTIONS
// DO I NEED TO CITE IMAGES??
// How do I change the body's background image ? 







