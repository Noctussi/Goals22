const progressBar = document.getElementById("progress-done-running");
const dataDone = document.getElementById("progress-done-running").textContent;

console.log(dataDone)

progressBar.style.width = `${dataDone}`;
progressBar.style.opacity = "1";

// 2,67 - 3,17 - 3,05