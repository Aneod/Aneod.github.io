const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question1base = "<p>Suis-je propriétaire de mon site web ?";
const question1complete = "<p>Suis-je propriétaire de mon site web ?<br><br>Oui, et à 100%. Le site vous appartient dans sa globalité. Nom de domaine inclus.</p>"
const question2base = "<p>J'ai déjà un site web, est-il possible de le reprendre ?</p>";
const question2complete = "<p>J'ai déjà un site web, est-il possible de le reprendre ?<br><br>C'est possible dans certains cas, en particulier si le site n'a pas été conçu sur la base d'une grandes plateforme de création de site web. Dans tout les cas cette question nécessite une analyse de votre site web.</p>"
const question3base = "<p>Un site web coûte-t-il vraiment le prix indiqué ?";
const question3complete = "<p>Un site web coûte-t-il vraiment le prix indiqué ?<br><br>Le tarif indiqué correspond à notre prestation standard pour ce type de service. Nous traitons aussi les demandes particulières et proposons de nombreuses options de personnalisation selon votre souhait. N'hésiter pas à nous contacter afin d'obtenir votre devis.</p>"
const question4base = "<p>L'achat du site ne se fait vraiment qu'après finalisation du site ?</p>";
const question4complete = "<p>L'achat du site ne se fait vraiment qu'après finalisation du site ?<br><br>Pour faire preuve de la confiance que nous vous portons, nous acceptons d'êtres réglés au moment où le site est entièrement terminé et mis en ligne, après que vous l'ayez validé.</p>"

question1.addEventListener('click', event => {
    question1.innerHTML = question1complete;
    question2.innerHTML = question2base;
    question3.innerHTML = question3base;
    question4.innerHTML = question4base;
});

question2.addEventListener('click', event => {
    question1.innerHTML = question1base;
    question2.innerHTML = question2complete;
    question3.innerHTML = question3base;
    question4.innerHTML = question4base;
});

question3.addEventListener('click', event => {
    question1.innerHTML = question1base;
    question2.innerHTML = question2base;
    question3.innerHTML = question3complete;
    question4.innerHTML = question4base;
});

question4.addEventListener('click', event => {
    question1.innerHTML = question1base;
    question2.innerHTML = question2base;
    question3.innerHTML = question3base;
    question4.innerHTML = question4complete;
});