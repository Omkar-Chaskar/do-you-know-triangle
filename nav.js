const btnMakeTriangle = document.querySelector("#btn-make-triangle");

btnMakeTriangle.addEventListener("click", function (){
        function loadDoc() {
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                  document.getElementById("fild-content").innerHTML = this.responseText;
                  }
                xhttp.open("GET", "./maketriangle.html", true);
                xhttp.send();
              }
})