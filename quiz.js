const btnSubmit = document.querySelector("#btn-submit");
const quizCheck = document.querySelectorAll("quiz")
var errMsg =document.querySelector("#err-msg")


btnSubmit.addEventListener("click", function (){
    if (quizCheck.checked) {
        errMsg.innerHTML = "Please select all answer."
        console.log("hiii")
    } else {
        console.log("gooo")
    }
})