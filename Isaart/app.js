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




//Gestion des données



import { listeCategories } from './oeuvres.js';
var categories = document.getElementById('categories');


//cree les differentes cases pour chacunes des categories.
for(let i = 0; i < listeCategories.length; i++) {
    categories.innerHTML += '<div class=categorie onclick="window.location=\'#galeries\'"><p>' + listeCategories[i][1] + '</p><img src="' + recherche(listeCategories[i][0])[0][5] + '"><h3>' + listeCategories[i][0] + '</h3></div>';
};




import { listeOeuvres } from './oeuvres.js';
var selection = document.getElementById('selection');

//pour connaitre les trois premiere oeuvres qui sont positives a la selection.
var listeNomTableauSelection = [];
var compte = 0;
for (let i = 0; i < listeOeuvres.length; i++) {
    if(listeOeuvres[i][6]){
        selection.innerHTML += '<img src="' + listeOeuvres[i][5] + '" class="vueTableauSelection" onclick="window.location=\'#tableau\'"></img>';
        listeNomTableauSelection[compte] = listeOeuvres[i][0]; //cree une liste de trois rangs avec le nom de chacun des tableaux dans la selection.
        compte+=1;
        if(compte >=3) {
            break;
        }
    }
};



//cette fonction crée la liste de tous les tableau dans la catégorie données par 'motRecherche'.
function recherche(motRecherche){
    var listeRecherche = [];
    for (let i = 0; i < listeOeuvres.length; i++) {
        for(let j = 0; j < listeOeuvres[i][4].length; j++) {
            if(listeOeuvres[i][4][j].toLowerCase() == motRecherche.toLowerCase()){
                listeRecherche.push(listeOeuvres[i]);
            }
        }
    };
    if(listeRecherche == ''){
        listeRecherche.push(listeOeuvres[0]); 
    }
    return(listeRecherche);
};



var galerie = document.getElementById('galerie');
var titreGalerie = document.getElementById('titreGalerie');


function nommageFiltre(nomFiltre){
    titreGalerie.innerHTML = "Galerie : " + nomFiltre;
}

function ajoutTableau(tableau){
    galerie.innerHTML += '<a href = \'#tableau\'><div class="vueTableau"><h1 class="titreVueTableau">' + listeOeuvres[tableau][0] + '</h1><img src="' + listeOeuvres[tableau][5] +'"></div></a>'
}

function resetGalerie(){
    nommageFiltre('Aucun filtre');
    galerie.innerHTML = '';
    for(let i = 0; i < listeOeuvres.length; i++){
        ajoutTableau(i);
    };
}

//pour faire apparaitre chacune des oeuvres dans la galerie. A utiliser au lancement.
resetGalerie();



var categorie = document.getElementsByClassName('categorie');

//cache tous les tableaux dans la galerie et reaffiche tous ceux qui font partie de la categorie cliquée.
for(let i = 0; i < listeCategories.length; i++) { //pour chaque categorie existante
    categorie[i].addEventListener('click', () => { //si on clique dessus
        nommageFiltre(listeCategories[i][0]);
        galerie.innerHTML = ''; //on efface toute la galerie
        for(let j = 0; j < listeOeuvres.length; j++){ //pour chaque tableau
            for(let k = 0; k < listeOeuvres[j][4].length; k++){ //on regarde si il appartient a la categorie
                if(listeOeuvres[j][4][k].toLowerCase() == listeCategories[i][0].toLowerCase()){ //si oui
                    ajoutTableau(j); //on le fait revenir
                }
            }
        };
        galerieVide();
        uploadVueTableau();
    });
}



//verifier si la galerie est vide pour afficher ou non le msg "galerie vide"
function galerieVide(){
    if (galerie.innerHTML == ''){
        galerie.innerHTML = '<h2>Galerie vide :\'(</h2>'
    }
}

var navBarre = document.getElementsByClassName('navBarre');

//si on clique sur 'Tout Voir' reset la galerie.
navBarre[0].addEventListener('click', () => {
    resetGalerie();
    uploadVueTableau();
})

//renvoie la valeur de la barre de recherche a chaque fois qu'on ecrit dedans.
BarreRecherche.addEventListener('input', () => {
    RechercheParMot(BarreRecherche.value);
    uploadVueTableau();
})


//trouve toutes les oeuvres contenant le mot 'recherche' dans leur nom.
function RechercheParMot(motRecherche){
    if(motRecherche == ''){
        resetGalerie();
    }
    else{
        nommageFiltre(motRecherche);
        galerie.innerHTML = '';
        for(let i=0; i < listeOeuvres.length; i++){
            compte = 0;
            for(let j=0; j < listeOeuvres[i][0].length; j++){
                if(listeOeuvres[i][0][j].toLowerCase() == motRecherche[compte].toLowerCase()){
                    compte += 1;
                    if (compte == motRecherche.length){ 
                        ajoutTableau(i);
                        break;
                    }
                }
                else{
                    compte = 0;
                }
            }
        }
    }
    galerieVide();
}



var titreVueTableau = document.getElementsByClassName('titreVueTableau');
var vueTableau = document.getElementsByClassName('vueTableau');

//a chaque changement de la galerie il les vueTableau changent !!
//cette fonction renouvelle les vueTableau pour preserver l'utilité de la fonction changementTableau.
function uploadVueTableau(){
    for(let i=0; i<vueTableau.length; i++){
        vueTableau[i].addEventListener('click', () => {
            changementTableau(titreVueTableau[i].innerHTML);
            presentationMoinsTableauPlus();
        })
    }
}

uploadVueTableau();

var vueTableauSelection = document.getElementsByClassName('vueTableauSelection');

function uploadVueTableauSelection(){
    for(let i=0; i<vueTableauSelection.length; i++){
        vueTableauSelection[i].addEventListener('click', () => {
            changementTableau(listeNomTableauSelection[i]);
            presentationMoinsTableauPlus();
        })
    }
}

uploadVueTableauSelection();





var nomTableau = document.getElementById('nomTableau');
var descriptionTableau = document.getElementById('descriptionTableau');
var dimensionTableau = document.getElementById('dimensionTableau');
var dateTableau = document.getElementById('dateTableau');
var imgTableau = document.getElementById('imgTableau');

//change le tableau présenté pour celui qui porte le nom 'nomTableau'.
function changementTableau(nomTableauSelected){
    for(let i=0; i<listeOeuvres.length; i++){
        if(nomTableauSelected.toLowerCase() == listeOeuvres[i][0].toLowerCase()){
            nomTableau.innerHTML = listeOeuvres[i][0];
            descriptionTableau.innerHTML = listeOeuvres[i][1];
            dimensionTableau.innerHTML = listeOeuvres[i][2];
            dateTableau.innerHTML = listeOeuvres[i][3];
            imgTableau.innerHTML = '<img src="' + listeOeuvres[i][5] + '">';
        }
    }
}



var presentation = document.getElementById('presentation');
var tableau = document.getElementById('tableau');

//lorsqu'on affiche un tableau, laisse la place de la presentation au ledit tableau.
function presentationMoinsTableauPlus(){
    presentation.style.display = 'none';
    tableau.style.display = 'flex';
}