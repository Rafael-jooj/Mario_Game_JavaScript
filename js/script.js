const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const menu = document.querySelector('.menu');
const over = document.querySelector('.game-over');

function inicio(){

    menu.style.display = 'none';

    pipe.classList.add('pipe-move');
    cloud.classList.add('cloud-move');

    function jump(){
        mario.classList.add('jump');
    
        setTimeout(()=>{
            mario.classList.remove('jump');
        } , 500)
    }
    
    const loop = setInterval(()=>{
    
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
        if(pipePosition <= 110 && pipePosition > -10 && marioPosition <= 80){
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './images/game-over.png';
            mario.style.width = '60px';
            mario.style.marginLeft = '40px';
    
            over.style.display = 'inline';
            clearInterval(loop);
        }
        
    }, 10);
    
    document.addEventListener('keydown', jump);
}

function reload(){
    window.location.reload();
}
