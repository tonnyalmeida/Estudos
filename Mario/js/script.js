const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {/* */
    mario.classList.add('jump');
    
    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500)
}

document.addEventListener('keypress', jump)
/*evento, quando qualquer tecla é pressionada a animaçao jump é executada */

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    /*converte a string do console em numero para podermos usar como altura do mario*/
    
       
    // Verifica a colisão
    if (pipePosition <= 270 && pipePosition > 190 && marioPosition < 80) {
        clearInterval(loop); // Para o loop do jogo
        pipe.style.animation = 'none';
        pipe.style.left = '270px';
        mario.style.bottom = marioPosition + 'px';
        mario.src = './images/game-over.png';
        mario.style.marginLeft = '12px';
    }

}, 10);



