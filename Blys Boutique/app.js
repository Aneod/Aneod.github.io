var header = document.getElementById('header');

setInterval(headerDefilement, 100);

function headerDefilement(){

    if (window.scrollY > 250){
        header.style.height = 100 + 'px';
        header.style.fontSize = 22 + 'px';
        barreListeHeader.style.top = 90 + 'px';
        puce.style.top = '-85px';
    }

    else{
        header.style.height = 80 + 'px';
        header.style.fontSize = 20 + 'px';
        barreListeHeader.style.top = 70 + 'px';
        puce.style.top = '-80px';
    }
}

var mouseIn = false;
var sitesDefilants = document.getElementById('sites-defilants');

document.querySelectorAll('.site').forEach( e => {
    e.addEventListener('mouseenter', () => {
        mouseIn = true;
    })

    e.addEventListener('mouseleave', () => {
        mouseIn = false;
    })
})

var test = 0;
setInterval(portfolioDefilement, 10);

function portfolioDefilement(){
    if(!mouseIn){
        test += 0.8;
        if(test >= (screen.width * 0.5 + 200) * 3){
            test = 0;
        }
        sitesDefilants.style.right = test + 'px';
    }
    
}

var listeHeader = document.getElementById('listeHeader');
var barreListeHeader = document.getElementById('barreListeHeader');

var listeHeaderRouge = document.getElementById('listeHeaderRouge');
var listeHeaderBleu = document.getElementById('listeHeaderBleu');
var listeHeaderViolet = document.getElementById('listeHeaderViolet');


listeHeader.addEventListener('mouseenter', (e) => {
    barreListeHeader.style.display = 'block';
    barreListeHeader.style.opacity = '100';
})

listeHeaderRouge.addEventListener('mouseenter', (e) => {
    barreListeHeader.style.left = screen.width*0.33 + 68 + 'px';
    barreListeHeader.style.background = 'orangered'
})

listeHeaderBleu.addEventListener('mouseenter', (e) => {
    barreListeHeader.style.left = screen.width*0.33 + 268 + 'px';
    barreListeHeader.style.background = 'blue'
})

listeHeaderViolet.addEventListener('mouseenter', (e) => {
    barreListeHeader.style.left = screen.width*0.33 + 472 + 'px';
    barreListeHeader.style.background = 'purple'
})

listeHeader.addEventListener('mouseleave', (e) => {
    barreListeHeader.style.opacity = '0';
})


var imgLogoHeader = document.getElementById('imgLogoHeader');
var logoHeader = document.getElementById('logoHeader');
var puce = document.getElementById('puce');

logoHeader.addEventListener('mouseenter', () => {
    imgLogoHeader.style.opacity = '0';
    imgLogoHeader.style.scale = '5';
    puce.style.opacity = '100';
    puce.style.scale = '6';
    puce.style.color = 'white';
})

logoHeader.addEventListener('mouseleave', () => {
    imgLogoHeader.style.opacity = '100';
    imgLogoHeader.style.scale = '1';
    puce.style.opacity = '0';
    puce.style.scale = '1';
    puce.style.color = 'black';
})