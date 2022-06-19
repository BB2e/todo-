// 매시간 매초에 업데이트

let times = document.querySelector('#time');

let setTIme = () => {
    let getTIme = new Date();
    let hour = getTIme.getHours();
    let min = getTIme.getSeconds();

    times.innerText = `${hour} : ${min}`;
}

setTimeout(setTIme);
setInterval(setTIme, 1000);

