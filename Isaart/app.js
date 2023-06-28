//header
var buttonRechercher = document.getElementById('buttonRechercher');
var LogoRecherche = document.getElementById('LogoRecherche');
var BarreRecherche = document.getElementById('BarreRecherche');
var textToutVoir = document.getElementById('textToutVoir');
var textCreateur = document.getElementById('textCreateur');

var EstCliquée = false;

buttonRechercher.addEventListener('mouseenter', () => {
    if (screen.width > 768){
        BarreRecherche.style.width = '14.1vw';
        LogoRecherche.style.height = '0';
    }
})

buttonRechercher.addEventListener('mouseleave', () => {
    if (!EstCliquée) {
        if (screen.width > 768){
            BarreRecherche.style.width = '12vw';
            LogoRecherche.style.height = '2.5vw';
        }
    }
})

buttonRechercher.addEventListener('click', () => {
    if (screen.width > 768){
        BarreRecherche.style.width = '14.1vw';
    }
    else{
        BarreRecherche.style.width = '40vw';
        BarreRecherche.style.height = '6vw';
        BarreRecherche.style.paddingLeft = '4vw';
        BarreRecherche.style.borderColor = 'black';
        textToutVoir.style.fontSize = '0';
        textCreateur.style.fontSize = '0';
        
    }
    LogoRecherche.style.height = '0';
    EstCliquée = true;
});

document.addEventListener('mouseup', () => {
    if (EstCliquée) {

        if (screen.width > 768){
            LogoRecherche.style.height = '2.5vw';
            BarreRecherche.style.width = '12vw';
        }
        else{
            LogoRecherche.style.height = '5vw';
            BarreRecherche.style.width = '0';
            BarreRecherche.style.height = '0';
            BarreRecherche.style.paddingLeft = '0';
            BarreRecherche.style.borderColor = 'white';
            textToutVoir.style.fontSize = '3.6vw';
            textCreateur.style.fontSize = '3.6vw';
        }
    }
    EstCliquée = false;
});