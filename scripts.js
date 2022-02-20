const progressBarRunning = document.getElementById("progress-done-running");
const progressBarCycling = document.getElementById("progress-done-cycling");
const dataDoneCycling = document.getElementById("progress-done-cycling").textContent;
const runningData = [2.67 , 3.17 , 3.05];
const cyclingData = [11.57 , 12.98];
const reducer = (accumulator, curr) => accumulator + curr;


document.getElementById("progress-done-running").textContent = `${Number((runningData.reduce(reducer)/500*100).toFixed(2))}` + "%" ;
progressBarRunning.style.width = `${runningData.reduce(reducer)/500*100}` + "%" ; 
progressBarRunning.style.opacity = "1";
document.getElementById("progress-done-cycling").textContent = `${Number((cyclingData.reduce(reducer)/1500*100).toFixed(2))}` + "%" ;
progressBarCycling.style.width = `${cyclingData.reduce(reducer)/1500*100}` + "%" ; 
progressBarCycling.style.opacity = "1";

console.log(runningData.reduce(reducer));

console.log(Number((cyclingData.reduce(reducer)/1500*100).toFixed(2)))