const dog = document.querySelector("#dog");

let tx1 = 0;
const goal = 300;

function apply (){
  dog.style.transform = `translateY(${tx1}px)`;
  if (tx1 >= goal) {
    dog.style.background = 'green';
  }
}

dog.ontouchstart = (e) => {
  dog.style.background = "red";
  console.log("터치 시작!");
  
};

dog.ontouchmove = (e) => {
  console.log("움직이는 중...");
};

dog.ontouchend = (e) => {
  tx1+= 30;
  apply();
  console.log("터치 끝!");
};

