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




//tableau.html  (bugué)

// var header = document.getElementById('header');
// var footer = document.getElementById('footer');
// var textTableau = document.getElementById('textTableau');
// var imgTableau = document.getElementById('imgTableau');
// var tableauEstCliqué = false;

// imgTableau.addEventListener('click', () => {
//     if (screen.width > 768){
//         if (!tableauEstCliqué) {
//             imgTableau.style.position = 'absolute';
//             imgTableau.style.width = '100vw';
//             textTableau.style.display = 'none';
//             header.style.display = 'none';
//             footer.style.display = 'none';
//         }
//         else if (tableauEstCliqué) {
//             imgTableau.style.position = 'initial';
//             imgTableau.style.width = 'initial';
//             textTableau.style.display = 'flex';
//             header.style.display = 'flex';
//             footer.style.display = 'block';
//         }
//         tableauEstCliqué = !tableauEstCliqué;
//     }
// })



//Gestion des données

var title = document.getElementById('title');
var presentation = document.getElementById('presentation');
var tableau = document.getElementById('tableau');
var selections = document.getElementById('selections');
var classification = document.getElementById('classification');
var galeries = document.getElementById('galeries');

var nomTableau = document.getElementById('nomTableau');
var descriptionTableau = document.getElementById('descriptionTableau');
var dimensionTableau = document.getElementById('dimensionTableau');
var dateTableau = document.getElementById('dateTableau');
var imgTableau = document.getElementById('imgTableau');
var retour = document.getElementById('retour');

var tableauSelection1 = document.getElementById('tableauSelection1');
var tableauSelection2 = document.getElementById('tableauSelection2');
var tableauSelection3 = document.getElementById('tableauSelection3');

const ponam = {
    image : "pexels-steve-johnson-1606591.jpg",
    titre : "Ponam",
    description : "Une nouvelle technique et un clin d'oeil à la talentueuse illustratrice Am Pone",
    dimensions : "80cm x 60cm",
    date : "Mars 2018"
};

const hermann = {
    image : "tableauA.PNG",
    titre : "Hermann",
    description : "La photo d'une tortue, plein d'effet au niveau du toucher: la peau, la carapace...",
    dimensions : "70cm x 50cm",
    date : "Février 2018"
};

const tableauC = {
    image : "tableauC.PNG",
    titre : "tableauC",
    description : "Je mets une description ici hein. D'ailleurs il y a un s a 'je mets' ? .",
    dimensions : "100cm x 200cm",
    date : "Ajourd'hui 2018"
};


tableauSelection1.addEventListener('mouseup', () => {

    title.innerHTML = 'Isaart | ' + ponam.titre;

    nomTableau.innerHTML = ponam.titre;
    descriptionTableau.innerHTML = ponam.description;
    dimensionTableau.innerHTML = ponam.dimensions;
    dateTableau.innerHTML = ponam.date;
    imgTableau.src = ponam.image;

    presentation.style.display = 'none';
    tableau.style.display = 'flex';
    selections.style.display = 'none';
    classification.style.display = 'none';
    galeries.style.display = 'none';
})

tableauSelection2.addEventListener('mouseup', () => {

    title.innerHTML = 'Isaart | ' + hermann.titre;

    nomTableau.innerHTML = hermann.titre;
    descriptionTableau.innerHTML = hermann.description;
    dimensionTableau.innerHTML = hermann.dimensions;
    dateTableau.innerHTML = hermann.date;
    imgTableau.src = hermann.image;

    presentation.style.display = 'none';
    tableau.style.display = 'flex';
    selections.style.display = 'none';
    classification.style.display = 'none';
    galeries.style.display = 'none';
})

tableauSelection3.addEventListener('mouseup', () => {

    title.innerHTML = 'Isaart | ' + tableauC.titre;

    nomTableau.innerHTML = tableauC.titre;
    descriptionTableau.innerHTML = tableauC.description;
    dimensionTableau.innerHTML = tableauC.dimensions;
    dateTableau.innerHTML = tableauC.date;
    imgTableau.src = tableauC.image;

    presentation.style.display = 'none';
    tableau.style.display = 'flex';
    selections.style.display = 'none';
    classification.style.display = 'none';
    galeries.style.display = 'none';
})

retour.addEventListener('mouseup', () => {
    title.innerHTML = 'Isaart | Accueil';

    presentation.style.display = 'block';
    tableau.style.display = 'none';
    selections.style.display = 'block';
    classification.style.display = 'block';
    galeries.style.display = 'block';
})