//header
var buttonRechercher = document.getElementById('buttonRechercher');
var LogoRecherche = document.getElementById('LogoRecherche');
var BarreRecherche = document.getElementById('BarreRecherche');

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
        BarreRecherche.style.width = '28.3vw';
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
            BarreRecherche.style.width = '24vw';
        }
    }
    EstCliquée = false;
});