box.ontouchstart = (e) => {
  box.style.background = "orange";
  console.log("터치 시작!");
};

box.ontouchmove = (e) => {
  console.log("움직이는 중...");
  box.style.background = pickColor();
};
const colors = ['lightsalmon','ligthpink','lightgray','lightyellow','lightgreen','black'];
function pickColor(){
  const i = Math.floor (Math.random()*colors.length);
  return colors[i];
}

box.ontouchend = (e) => {
  box.style.background = "lightblue";
  console.log("터치 끝!");
};