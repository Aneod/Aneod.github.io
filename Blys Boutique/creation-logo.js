const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question1base = "<h3>Un logo est-il fourni avec la charte graphique ?</h3>";
const question1complete = "<h3>Un logo est-il fourni avec la charte graphique ?</h3><br><p>C'est possible si vous le souhaitez. Vous pouvez bien sûr garder un logo déjà existant.</p>"
const question2base = "<h3>Un logo est-il fourni avec le site ?</h3>";
const question2complete = "<h3>Un logo est-il fourni avec le site ?</h3><br><p>C'est également possible si vous le souhaitez.</p>"
const question3base = "<h3>Pourquoi réaliser plusieurs versions d'un logo ?</h3>";
const question3complete = "<h3>Pourquoi réaliser plusieurs versions d'un logo ?</h3><br><p>Plusieurs version d'un logo permettent une utilisation optimale de celui-ci. Comme sur différents fonds de couleurs, pour plusieurs tailles et plusieurs ambiances, certains modèles sont plus adaptés et visibles que d'autres.</p>"
const question4base = "<h3>Plusieurs versions coût-elles plus cher ?</h3>";
const question4complete = "<h3>Plusieurs versions coût-elles plus cher ?</h3><br><p>La réponse est non. Car une fois que le logo principal est réalisé, il est très simple pour nous d'en faire plusieurs versions.</p>"

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