
const btnSubmit = document.querySelector("#btn-submit");
var errMsg =document.querySelector("#err-msg")
var finalScore = document.querySelector("#score")
let score = 0;

var q1= document.quizes.q1;
var q2= document.quizes.q2;
var q3= document.quizes.q3;
var q4= document.quizes.q4;
var q5= document.quizes.q5;
var q6= document.quizes.q6;
var q7= document.quizes.q7;
var q8= document.quizes.q8;
var q9= document.quizes.q9;
var q10= document.quizes.q10;

var quesArray = [q1 , q2, q3, q4 ,q5 ,q6 ,q7 ,q8 ,q9 ,q10];
btnSubmit.addEventListener("click", function(e) {
    e.preventDefault()
    for(let i=0;i<quesArray.length;i++){
        console.log(quesArray[i])
        if(quesArray[i].value !="")
        {   
            errMsg.style.display = "none";
            if(quesArray[i].value == "right"){
            score++; 
            }
        }else{
            errMsg.style.display = "block";
        }
    }
    finalScore.innerHTML=score;
})