const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question1base = "<h3>Mon site sera-t-il inactif pendant la rénovation ?</h3>";
const question1complete = "<h3>Mon site sera-t-il inactif pendant la rénovation ?</h3><br><p>Non. Nous rénovons en réalité un copie de votre site. C'est après finalisation de la rénovation qu'il faudra remplacer l'ancien modèle par le nouveau, ce qui nécessite très peu de temps, voir pas du tout.</p>"
const question2base = "<h3>Dois-je changer de nos de domaine ou tout autres paramètres importants pour refaire le site ?</h3>";
const question2complete = "<h3>Dois-je changer de nos de domaine ou tout autres paramètres importants pour refaire le site ?</h3><br><p>Ce n'est pas nécessaire, l'hébergeur reste le même, ainsi que le nom de domaine. Et vos clients n'aurons rien à changer pour accéder à votre site.</p>"
const question3base = "<h3>Les informations récoltées sur mes clients disparaîtrons-elles avec la rénovation ?</h3>";
const question3complete = "<h3>Les informations récoltées sur mes clients disparaîtrons-elles avec la rénovation ?</h3><br><p>Non, vous garderez toutes vos données récoltées. La rénovation n'a aucun impact là-dessus.</p>"

question1.addEventListener('click', event => {
    question1.innerHTML = question1complete;
    question2.innerHTML = question2base;
    question3.innerHTML = question3base;
});

question2.addEventListener('click', event => {
    question1.innerHTML = question1base;
    question2.innerHTML = question2complete;
    question3.innerHTML = question3base;
});

question3.addEventListener('click', event => {
    question1.innerHTML = question1base;
    question2.innerHTML = question2base;
    question3.innerHTML = question3complete;
});