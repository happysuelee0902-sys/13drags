const box = document.querySelector('#box');


box.ontouchstart = (e) => {
 console.log("터치 시작!");
};

let basesize = 50;
let size = basesize;

box.ontouchmove = (e) => {
  size += 10 ; 
   box.style.width = size + 'px';
   box.style.height = size + 'px';
    console.log("움직이는 중...");
};

box.ontouchend = (e) => {
  size = basesize;
  console.log("터치 끝!");
};