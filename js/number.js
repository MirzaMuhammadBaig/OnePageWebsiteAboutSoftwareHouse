
function animate(obj, initVal, lastVal, duration) {
   let startTime = null;

//get the current timestamp and assign it to the currentTime variable
let currentTime = Date.now();

//pass the current timestamp to the step function
const step = (currentTime ) => {

//if the start time is null, assign the current time to startTime
if (!startTime) {
   startTime = currentTime ;
}

const progress = Math.min((currentTime - startTime)/ duration, 1);

obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

if (progress < 1) {
   window.requestAnimationFrame(step);
} else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
   }
};

window.requestAnimationFrame(step);
}
let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');
let text4 = document.getElementById('0104');
const load = () => {
   animate(text1, 0, 1214, 7000);
   animate(text2, 0, 678, 7000);
   animate(text3, 100, 6, 7000);
   animate(text4, 100, 4060, 7000);
}
