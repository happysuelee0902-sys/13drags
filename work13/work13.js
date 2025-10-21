const box = document.querySelector('#box');
const circle = document.querySelector('#circle');

let swapped = false;

box.ontouchstart = (e) => {
   if(!swapped){
    box.style.zIndex = 1;
    circle.style.zIndex = 2;
    box.style.background = "black";
    swapped = true;
   }else{
    box.style.zIndex = 2;
    circle.style.zIndex = 1;
    box.style.background = "#fff";
    swapped = false;
   }
  console.log("터치 시작!");
};

box.ontouchmove = (e) => {
  console.log("움직이는 중...");
};

box.ontouchend = (e) => {
    box.style.zIndex = 2;
    circle.style.zIndex = 1;
    box.style.background = "#fff";
    swapped = false;
  console.log("터치 끝!");
};
