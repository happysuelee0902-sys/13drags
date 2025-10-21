const a = document.querySelector('#a');

a.ontouchstart = (e) => {
 console.log("터치 시작!");
};

a.ontouchmove = (e) => {
   const ch = pickAlf();
   a.textContent = ch;
   applyColor(ch);
    console.log("움직이는 중...");
};

const alf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function pickAlf(){
  const i = Math.floor (Math.random()*alf.length);
  return alf[i];
}

const ch = pickAlf();
a.textContent = ch;

function applyColor(ch){
    switch(ch){
        case 'e': a.style.backgroundColor = 'darkturquoise'; break;
        case 'a': a.style.backgroundColor = 'red'; break;
        case 'b': a.style.backgroundColor = 'red'; break;
        case 'c': a.style.backgroundColor = 'red'; break;
        case 'd': a.style.backgroundColor = 'red'; break;
        case 'e': a.style.backgroundColor = 'darkturquoise'; break;
        case 'f': a.style.backgroundColor = 'red'; break;
        case 'g': a.style.backgroundColor = 'red'; break;
        case 'h': a.style.backgroundColor = 'red'; break;
        case 'i': a.style.backgroundColor = 'darkturquoise'; break;
        case 'j': a.style.backgroundColor = 'red'; break;
        case 'k': a.style.backgroundColor = 'red'; break;
        case 'l': a.style.backgroundColor = 'red'; break;
        case 'n': a.style.backgroundColor = 'red'; break;
        case 'm': a.style.backgroundColor = 'red'; break;
        case 'o': a.style.backgroundColor = 'darkturquoise'; break;
        case 'p': a.style.backgroundColor = 'red'; break;
        case 'q': a.style.backgroundColor = 'red'; break;
        case 'r': a.style.backgroundColor = 'red'; break;
        case 's': a.style.backgroundColor = 'red'; break;
        case 't': a.style.backgroundColor = 'red'; break;
        case 'u': a.style.backgroundColor = 'darkturquoise'; break;
        case 'v': a.style.backgroundColor = 'red'; break;
        case 'w': a.style.backgroundColor = 'red'; break;
        case 'x': a.style.backgroundColor = 'red'; break;
        case 'y': a.style.backgroundColor = 'red'; break;
        case 'z': a.style.backgroundColor = 'red'; break;
    }
}

a.ontouchend = (e) => {
    const ch = pickAlf();
   a.textContent = ch;
   applyColor(ch);
  console.log("터치 끝!");
};