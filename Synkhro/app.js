var symboleLumineux = document.getElementById('symboleLumineux');
var symboleLumineuxWidth = 600;
var symboleLumineuxHeight = 400;

symboleLumineux.style.width = symboleLumineuxWidth + 'px';
symboleLumineux.style.height = symboleLumineuxHeight + 'px';

symboleLumineux.style.top = (screen.height - symboleLumineuxHeight)/2 + 'px';
symboleLumineux.style.left = (screen.width - symboleLumineuxWidth)/2 + 'px';


const card = document.querySelectorAll('.symboleLumineux');
var verso = false;

card.forEach( el => {
    el.addEventListener('mousemove', e => {
        let elRect = el.getBoundingClientRect()

        let x = e.clientX - elRect.x
        let y = e.clientY - elRect.y

        let midCardWidth = elRect.width/2
        let midCardHeight = elRect.height/2

        let angleY = -(x-midCardWidth) / 8 //!!!
        let angleX = (y-midCardHeight) / 8

        let glowX = x/elRect.width * 100;
        let glowY = y/elRect.width * 100;

        if(verso){
            angleY += 180;
            glowX = 50-(glowX-50);
            el.children[0].children[0].style.display = 'none'
            el.children[0].children[1].style.display = 'block'
        }
        else{
            el.children[0].children[0].style.display = 'block'
            el.children[0].children[1].style.display = 'none'
        }

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(105, 0, 0), transparent)`
    })

    el.addEventListener('mouseleave', e => {
        el.children[0].style.transform = `rotateX(${0}deg) rotateY(${0}deg) scale(1)`
        el.children[1].style.transform = `rotateX(${0}deg) rotateY(${0}deg) scale(1)`
        el.children[1].style.background = `radial-gradient(circle at ${50}% ${0}%, rgb(105, 0, 0), transparent)`
        verso = false;
    })

    el.addEventListener('click', e => {
        verso = !verso;
        let elRect = el.getBoundingClientRect()

        let x = e.clientX - elRect.x
        let y = e.clientY - elRect.y

        let midCardWidth = elRect.width/2
        let midCardHeight = elRect.height/2

        let angleY = -(x-midCardWidth) / 8 //!!!
        let angleX = (y-midCardHeight) / 8

        let glowX = x/elRect.width * 100;
        let glowY = y/elRect.width * 100;

        if(verso){
            angleY += 180;
            glowX = 50-(glowX-50);
            el.children[0].children[0].style.display = 'none'
            el.children[0].children[1].style.display = 'block'
        }
        else{
            el.children[0].children[0].style.display = 'block'
            el.children[0].children[1].style.display = 'none'
        }

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(105, 0, 0), transparent)`
    })
})