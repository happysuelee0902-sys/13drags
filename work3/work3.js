const 마라탕 = document.querySelector('#마라탕');
const menu = document.querySelector('#menu');

마라탕.ontouchstart = (e) => {

 console.log("터치 시작!");
};

마라탕.ontouchmove = (e) => {
   마라탕.textContent = pickFood(); 
    console.log("움직이는 중...");
};

const recoms = ['밥','먹지마','된장찌개','부대찌개','떡볶이','말차라떼'];
function pickFood(){
  const i = Math.floor (Math.random()*recoms.length);
  return recoms[i];
}


마라탕.ontouchend = (e) => {
  마라탕.textContent = pickFood(); 
  console.log("터치 끝!");
};