var inputFArea = document.querySelector("#fangle");
var inputSArea = document.querySelector("#sangle");
var btnCalcHyp = document.querySelector("#btn-calc-hyp");
var errMsg = document.querySelectorAll("err-msg");

btnCalcHyp.addEventListener("click", function (){
    var firstAngle = Number(inputFArea.value);
    var secondAngle = Number(inputSArea.value);

    firstAngle = firstAngle * firstAngle;
    secondAngle = secondAngle * secondAngle;
    var hyp = Math.sqrt(firstAngle + secondAngle)
    console.log(hyp)

    document.querySelector("#msg").innerHTML = hyp;
})