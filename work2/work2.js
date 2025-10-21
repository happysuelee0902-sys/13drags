const circle = document.querySelector('#circle');

let size = 0;

circle.ontouchstart = (e) => {
  circle.style.background = "orange";
    size = 0;  
  console.log("터치 시작!");
};

circle.ontouchmove = (e) => {
  size += 3;
   circle.style.borderRadius = size +'px';
    console.log("움직이는 중...");
};

circle.ontouchend = (e) => {
  circle.style.background = "lightblue";
  circle.style.borderRadius = '50%'
  console.log("터치 끝!");
};