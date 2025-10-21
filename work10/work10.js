const star = document.querySelector('#star');
 const balls = [
  '#circle1','#circle2','#circle3','#circle4','#circle5',
  '#circle6','#circle7','#circle8','#circle9'
].map(sel => document.querySelector(sel)).filter(Boolean);

let next = 0; 
let last = 0;
const GAP = 120;

function revealNext(){
  if (next >= balls.length) return;
  const el = balls[next++];
  el.style.opacity= '1';
  el.style.transform = 'scale(1)';   
}
function resetCircles(){
  next = 0;
  balls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'scale(.2)';
  });
}

star.ontouchstart = (e) => {
  console.log("터치 시작!");
};

star.ontouchmove = (e) => {
  const t = e.touches[0];
  if (!t) return;
  const now = performance.now();
  if (now > GAP) {
   revealNext();
last = now;
}
  console.log("움직이는 중...");
};

star.ontouchend = (e) => {
  if (next >= balls.length) resetCircles();
  console.log("터치 끝!");
};