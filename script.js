
const one = document.getElementById("one")
one.addEventListener("click", () =>{
  alert("thanks for click me ");
});

const double = document.getElementById("double");
function fun()  {
  alert("thanks for double click me");
}

function down(){
  getElementById("mouseover").style.color = "red"
}

function out(){
  getElementById("mouseover").style.color = "brown"
}

function myfun(){
  const text = document.getElementById("text");
  text.value = text.value.toUpperCase();
}

function myFunction(){
  getElementById("hidden").innerHTML = "thanks";
}

