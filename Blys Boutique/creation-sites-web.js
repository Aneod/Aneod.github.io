const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question1base = "<h3>Suis-je propriétaire de mon site web ?</h3>";
const question1complete = "<h3>Suis-je propriétaire de mon site web ?</h3><br><p>Oui, et à 100%. Le site vous appartient dans sa globalité. Nom de domaine inclus.</p>"
const question2base = "<h3>J'ai déjà un site web, est-il possible de le reprendre ?</h3>";
const question2complete = "<h3>J'ai déjà un site web, est-il possible de le reprendre ?</h3><br><p>C'est possible dans certains cas, en particulier si le site n'a pas été conçu sur la base d'une grandes plateforme de création de site web. Dans tout les cas cette question nécessite une analyse de votre site web.</p>"
const question3base = "<h3>Un site web coûte-t-il vraiment le prix indiqué ?</h3>";
const question3complete = "<h3>Un site web coûte-t-il vraiment le prix indiqué ?</h3><br><p>Le tarif indiqué correspond à notre prestation standard pour ce type de service. Nous traitons aussi les demandes particulières et proposons de nombreuses options de personnalisation selon votre souhait. N'hésiter pas à nous contacter afin d'obtenir votre devis.</p>"
const question4base = "<h3>L'achat du site ne se fait vraiment qu'après finalisation du site ?</h3>";
const question4complete = "<h3>L'achat du site ne se fait vraiment qu'après finalisation du site ?</h3><br><p>Pour faire preuve de la confiance que nous vous portons, nous acceptons d'êtres réglés au moment où le site est entièrement terminé et mis en ligne, après que vous l'ayez validé.</p>"

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