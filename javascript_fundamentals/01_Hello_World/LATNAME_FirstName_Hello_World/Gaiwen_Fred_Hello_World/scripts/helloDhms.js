const pangalan = prompt("What is your name?");
const kulay = prompt("What is your favorite color?");
const likodKulay = prompt("What is your preferred background color?");

document.getElementById("nameHM").innerHTML = pangalan;
document.getElementById("nameHM").style.color = kulay;
document.body.style.backgroundColor = likodKulay;
