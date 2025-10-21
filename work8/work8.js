const me = document.querySelector('#me');
const mom = document.querySelector('#mom');

let sx = null, sy = null;     // 드래그 시작 좌표
const MIN   = 0.15;                
const RANGE = 250;  

me.ontouchstart = (e) => {
  const t = e.touches[0];
   sx = t.clientX; sy = t.clientY;  //드래그 x,y좌표저장
  console.log("터치 시작!");
};

me.ontouchmove = (e) => {
  const t = e.touches[0];
  if (!t || sx === null) return; // 터치 없으면 시작 ㄴ
    const dx = t.clientX - sx;  // x로 얼마나 움직임?
  const dy = t.clientY - sy;
  const dist = Math.hypot(dx, dy);          // 시작점에서 이동거리계산


  const op = Math.max(MIN, 1 - dist / RANGE); //dist - 지금까지 드래그한거리 dist = 0 -> op = 1 (보임), dist = range => op = 0 투명
  mom.style.opacity = op;
    console.log("움직이는 중...");
};

me.ontouchend = (e) => {
  sx = sy = null;  // 초기화 
  console.log("터치 끝!");
};