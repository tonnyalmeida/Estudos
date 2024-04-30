const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const wall = document.getElementById('fundo')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    if (hr >= 0 && hr <= 5) {
        hr = '0' + hr;
        wall.style.backgroundImage = "url('imagens/foto-madrugada.jpg')"
        document.body.style.background = '#5D559A'
    } else if (hr >= 6 && hr < 10) {
        hr = '0' + hr;
        wall.style.backgroundImage = "url('imagens/foto-dia.jpg')"
        document.body.style.background = '#509ED7'
    } else if (hr >= 10 && hr < 15) {
        wall.style.backgroundImage = "url('imagens/foto-dia.jpg')"
        document.body.style.background = '#509ED7'
    } else if (hr >= 15 && hr < 18) {
        wall.style.backgroundImage = "url('imagens/foto-tarde.jpg')"
        document.body.style.background = '#FCBC68'
    } else {
        wall.style.backgroundImage = "url('imagens/foto-noite.jpg')"
        document.body.style.background = '#8E6DEF'
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})





/*

if(hr < 10) hr = '0' + hr;
if(min < 10) min = '0' + min;
if(sec < 10) sec = '0' + sec;

*/