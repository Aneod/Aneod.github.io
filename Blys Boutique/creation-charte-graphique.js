const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question1base = "<h3>Un logo est-il fourni avec la charte graphique ?</h3>";
const question1complete = "<h3>Un logo est-il fourni avec la charte graphique ?</h3><br><p>C'est possible si vous le souhaitez. Vous pouvez bien sûr garder un logo déjà existant.</p>"
const question2base = "<h3>C'est quoi une charte graphique ?</h3>";
const question2complete = "<h3>C'est quoi une charte graphique ?</h3><br><p>Une charte graphique est un ensemble de règles de structure permettant la cohérence graphique d'un site Web par exemple.</p>"
const question3base = "<h3>Si je crée un site Web, y a-il automatiquement une charte graphique ?</h3>";
const question3complete = "<h3>Si je crée un site Web, y a-il automatiquement une charte graphique ?</h3><br><p>Même sans véritable charte graphique, nous faisons des sites Web agréables à l'oeil et cohérents dans leurs structures. Une charte graphique est un énomre plus pour un site, sans être indispensable.</p>"
const question4base = "<h3>Sous quelle forme donnez vous la charte ?</h3>";
const question4complete = "<h3>Sous quelle forme donnez vous la charte ?</h3><br><p>Nous préférons bien sûr vous l'apporter sur support informatique, mais si vous avez besoin de la charte sur documents physiques nous pouvons nous charger le l'impression.</p>"

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