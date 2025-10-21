const cat = document.querySelector('#cat');
const w = document.querySelector('#w');

let ty = 0;
const goal = 350;

function apply(){
    const t = `translateY(${ty}px)`;
    cat.style.transform = t;
    if(w) w.style.transform = t;
    if (w && ty >= goal) { // w가 존재하고 누적이동이 goal이상이면 제거
    w.style.display= 'none';
  }
}
cat.ontouchstart = (e) => {
  console.log("터치 시작!");
};

cat.ontouchmove = (e) => {
  console.log("움직이는 중...");
};

cat.ontouchend = (e) => {
  ty+= 30;
  apply()

  console.log("터치 끝!");
};

