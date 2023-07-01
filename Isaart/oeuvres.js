export var listeOeuvres;
export var listeCategories;


var listeCategories = [
    ["Nature","Poissons, chats et quelques surprises peintes !"],
    ["Building","Des batiments étranges."],
    ["Chien","Ils aiment le lait."],
    ["test","pour tester"],
    ["vide","c'est vide"],
];


var listeOeuvres = [

    // [
    //     Nom du tableau,
    //     Description,
    //     Dimensions,
    //     Date,
    //     Catégories,
    //     L'image,
    //     VRAI si dans la sélection, FAUX sinon
    // ],

    [
        "Ponam",
        "Une nouvelle technique et un clin d'oeil à la talentueuse illustratrice Am Pone",
        "80cm x 60cm",
        "Mars 2018",
        ["nature"],
        "pexels-steve-johnson-1606591.jpg",
        false
    ],

    [
        "Hermann",
        "La photo d'une tortue, plein d'effet au niveau du toucher: la peau, la carapace...",
        "70cm x 50cm",
        "Février 2018",
        ["nature","building"],
        "tableauB.PNG",
        true
    ],

    [
        "tableauC",
        "Je mets une description ici hein. D'ailleurs il y a un s a 'je mets' ? .",
        "100cm x 200cm",
        "Aujourd'hui 2018",
        ["building"],
        "tableauC.PNG",
        true
    ],

    [
        "tableauB",
        "Ceci est un faux tableau mais vous pouvez me l'acheter",
        "1cm x 1km",
        "hier",
        ["chien"],
        "tableauC.PNG",
        true
    ],

    [
        "tableauA",
        "Ceci est un faux tableau mais vous pouvez me l'acheter",
        "1cm x 1km",
        "hier",
        ["test"],
        "tableauA.PNG",
        false
    ],
];