const squ1 = document.querySelector('#squ1');
const squ2 = document.querySelector('#squ2');

let tx1 = 0;  // squ1 누적이동거리
let tx2 = 0;

function apply (){
  squ1.style.transform = `translateX(${tx1}px)`;
  squ2.style.transform = `translateX(${tx2}px)`;
}

squ1.ontouchstart = (e) => {
  console.log("터치 시작!");
};
squ1.ontouchmove = (e) => {
    console.log("움직이는 중...");
};
squ1.ontouchend = (e) => {
  tx1-= 10;
  apply();
  console.log("터치 끝!");
};

squ2.ontouchstart = (e) => {
  console.log("터치 시작!");
 
};
squ2.ontouchmove = (e) => {
    console.log("움직이는 중...");
};
squ2.ontouchend = (e) => {
  tx2 += 10;
  apply();
  console.log("터치 끝!");
};