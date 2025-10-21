const th = document.querySelector('#th');
const 성공 = document.querySelector('#성공');
const finish = document.querySelector('#finish'); 

let tx = 0, ty = 0; 
let startX = null, startY = null;
let baseX = 0,  baseY = 0;

function apply(){
  th.style.transform = `translate(${tx}px, ${ty}px)`;
}

function isOverlap(a,b){
  const ar = a.getBoundingClientRect();
  const br = b.getBoundingClientRect();
  return !(ar.right < br.left || ar.left > br.right || ar.bottom < br.top || ar.top > br.bottom);
}

th.ontouchstart = (e) => {
  const th= e.touches[0]
  startX = th.clientX;
  startY = th.clientY;
  baseX  = tx;
  baseY  = ty
  
};
th.ontouchmove = (e) => {
  const th = e.touches[0];
  if (!th || startX === null) return;
  const dx = th.clientX - startX;
  const dy = th.clientY - startY;
  tx = baseX + dx;
  ty = baseY + dy;
  apply();
  console.log("움직이는 중...");
  if (finish && isOverlap(th, finish)) {
  성공.style.opacity = '1'; }
};

th.ontouchend = (e) => {
  startX = startY = null; 
  console.log("터치 끝!");
};

