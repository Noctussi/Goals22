const progressBar = document.querySelector("#progress-done-running");
const dataDone = document.getElementById("progress-done-running").textContent;

console.log(dataDone)

progressBar.style.width = dataDone;
progressBar.style.opacity = 1;