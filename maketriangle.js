
var inputFArea = document.querySelector("#fangle");
var inputSArea = document.querySelector("#sangle");
var inputTArea = document.querySelector("#tangle");
var btnSubmitMakeTriangle = document.querySelector("#btn-submit-make-triangle");
var inputArea = document.querySelectorAll("number");
var errMsg = document.querySelectorAll("err-msg");

btnSubmitMakeTriangle.addEventListener("click",function () {
    var firstAngle = Number(inputFArea.value);
    var secondAngle = Number(inputSArea.value);
    var thirdangle = Number(inputTArea.value);

    if (inputArea.values == null && inputArea.values == 0) {
        errMsg.innerHTML = "Pleas input valid values"
    }else{
        var sum = firstAngle + secondAngle + thirdangle ;
    console.log(sum);
    if (sum == 180) {
        document.querySelector("#msg").innerHTML = "It is a Triangle";
    } else {
        document.querySelector("#msg").innerHTML = "It is not a Triangle"
    }
    }  
})

