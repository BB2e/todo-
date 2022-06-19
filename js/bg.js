// 새로고침 할때마다 배경이 바뀌게

let bgImg = document.querySelector('#bgImg');
let bgNum =  Math.floor(Math.random() * 3);

bgImg.style.backgroundImage = `url(images/bg${bgNum}.jpg)`

