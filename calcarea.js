var inputFArea = document.querySelector("#fangle");
var inputSArea = document.querySelector("#sangle");
var inputTArea = document.querySelector("#tangle")
var btnCalcArea = document.querySelector("#btn-calc-area");
var errMsg = document.querySelectorAll("err-msg");

btnCalcArea.addEventListener("click", function (){
    var a = Number(inputFArea.value);
    var b = Number(inputSArea.value);
    var c = Number(inputTArea.value);

    if ((a+b)>c && (a+c)>b && (b+c)>a ) {
        var s = (a+b+c)/2;

        a = s-a;
        b = s-b;
        c = s-c;
        console.log(s);
        var area =  Math.sqrt(s*(a)*(b)*(c))
        console.log(area)
        document.querySelector("#msg").innerHTML = area;
    } else {
        document.querySelector("#msg").innerHTML = "please enter values in order of Addition of two values are greater than third value";
        document.querySelector("#msg").style.color = "red";
    }

    
})