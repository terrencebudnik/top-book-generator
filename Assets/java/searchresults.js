const element = document.getElementsByClassName("waves-effect waves-light btn-small");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Added to Faves";
}
