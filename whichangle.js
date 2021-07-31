
var btnNextQuiz = document.querySelector("#btn-next-quiz");
var fAngle = document.querySelector("#fangle");
var sAngle = document.querySelector("#sangle");
var tAngle = document.querySelector("#tangle");
var obtuse = document.querySelector("#obtuseangle");
var right = document.querySelector("#rightangle")
var acute = document.querySelector("#acuteangle")
var angle

function getRandomNo(){
    var a1=(Math.floor((Math.random() * 120) + 1));
    var a2=(Math.floor((Math.random() * a1) + 20));
    // var a3= 180 - (a1+a2);
    // var a3 =(Math.floor((Math.random() * a1) + 30));;
    var a3= 90;
    
    
    fAngle.value = a1;
    sAngle.value = a2;
    tAngle.value = a3;
}

btnNextQuiz.addEventListener("click", function clickHandler(){
    getRandomNo();
})

function checkAns(fAngle,sAngle,tAngle){
    if(tAngle.value == 90){
        console.log("done")
    }
}

