var ship = document.getElementById('ship');
var ball = document.getElementsByClassName('ball');
var balls = document.getElementById('balls');
var body = document.getElementById('body');
var fpsCounter = document.getElementById('fps');
var timer = document.getElementById('timer');

var ballSize = 40;
//ball.style.width = ballSize + 'px';
//ball.style.height = ballSize + 'px';

var bottom = document.getElementsByClassName('bottom');
var right = document.getElementsByClassName('right');
var topp = document.getElementsByClassName('top'); //top MDN reference => bug !?
var left = document.getElementsByClassName('left');

var ballSpeed = 10;
var time = 0;
var finDeBoucleActive = false;

setInterval(avancement, 10); //tout les 100-ièmes de seconde; => 100fps max

function avancement(){
    time += 1/100;
    timer.textContent = Math.floor(time*100)/100;
    moveBalls();
    collision();
    scenario();
}


function scenario(){
    if (timer.textContent == 2.5){
        cercle(10,45);
    }
    if (timer.textContent == 5.5){
        cercle(10,0);
    }
    if (timer.textContent == 8){
        cercle(10,45);
        finDeBoucleActive = true;
    }
    if (timer.textContent == 10.5){
        balls.innerHTML = '';
        ballSpeed = 15;
        cercle(30,0);
    }
    if (timer.textContent == 13){
        balls.innerHTML = '';
        cercle(35,15);
    }
    if (timer.textContent == 16){
        balls.innerHTML = '';
        cercle(40,30);
    }
    if (timer.textContent == 17){
        cercle(60,60);
    }
    variationCouleurBody(255, 255, 255, 0.1, 17);
    variationCouleurBody(-255, -255, -255, 0.5, 17.1);
    if (timer.textContent == 20){
        balls.innerHTML = '';
        ballSpeed = 5;
        finDeBoucleActive = false;
    }
    variationCouleurBody(255, 255, 255, 0.5, 20);
    variationCouleurShip(-255, -255, -255, 0.5, 20);
    spirale(12, 8, 135, 0.1, 0, 20.5);
    variationCouleurBalls(-255, -255, -255, 1.2, 20.6);
    if (timer.textContent == 35){
        finDeBoucleActive = true;
    }
    variationCouleurBody(70, -255, 70, 5, 35);
    if (timer.textContent == 40){
        balls.innerHTML = '';
        ballSpeed = 4;
    }
    variationCouleurBody(130, -255, 130, 0.3, 42.5);
    losange(12, 0.1, 0, 42.5);
    losange(16, 0.1, 45, 42.5);
    variationCouleurBody(-255, -255, -255, 3, 47);
    if (timer.textContent == 49){
        balls.innerHTML = '';
        alert('Niveau Beta terminé !');
    }
}

//retourner au fichier VSC plus facilement
document.addEventListener('keypress', () => {
    document.location.href="..";
})


function cercle(nb, orientation){
    for(i=0; i < nb; i++){
        creationLinearBall(360/nb*i + orientation, screen.width/2-ballSize/2, screen.height/2-ballSize/2);
    }
}

function spirale(nbCouche, nbParCouche, degSpirale, secondesEntreCouche, orientation, debut){
    for (let i = 0; i < nbCouche; i++){
        if (timer.textContent == debut+secondesEntreCouche*i){
            cercle(nbParCouche,(degSpirale/nbCouche)*i+orientation);
        }
    }
}

function losange(ballParCote, secondesEntreCouche, orientation, debut){
    spirale(ballParCote/2, 4, 45, secondesEntreCouche, orientation, debut);
    spirale(ballParCote/2, 4, -45, secondesEntreCouche, orientation, debut);
}

document.addEventListener('mousemove', () => {
    fpsMeter()
    ship.style.left = event.pageX - 20 + 'px';
    ship.style.top = event.pageY - 20 + 'px';
})


var shipRed = 255;
var shipGreen = 255;
var shipBlue = 255;

var ballsRed = 255;
var ballsGreen = 255;
var ballsBlue = 255;

var bodyRed = 0;
var bodyGreen = 0;
var bodyBlue = 29;
var o = 0;

//vas de rgb de base a rgb donné en t sec;
function variationCouleurShip(r, g, b, t, debut){ //t en seconde
    if (timer.textContent == debut){
        redPerTickShip = (r-shipRed)/(t*100); //quantité de rouge a ajouter chaque 100-ième de sec
        greenPerTickShip = (g-shipGreen)/(t*100);
        bleuPerTickShip = (b-shipBlue)/(t*100);
    }
    for (i = 0; i < t*100; i++){
        if(timer.textContent == debut+0.01*i){
            shipRed += redPerTickShip;
            shipGreen += greenPerTickShip;
            shipBlue += bleuPerTickShip;
            ship.style.backgroundColor = 'rgb(' + shipRed + ', ' + shipGreen + ', ' + shipBlue + ')';
            ship.style.boxShadow = '0 0 40px rgb(' + shipRed + ', ' + shipGreen + ', ' + shipBlue + ')';
        }
    }
}

function variationCouleurBalls(r, g, b, t, debut){ //t en seconde
    if (timer.textContent == debut){
        redPerTickBalls = (r-ballsRed)/(t*100); //quantité de rouge a ajouter chaque 100-ième de sec
        greenPerTickBalls = (g-ballsGreen)/(t*100);
        bleuPerTickBalls = (b-ballsBlue)/(t*100);
    }
    for (i = 0; i < t*100; i++){
        if(timer.textContent == debut+0.01*i){
            ballsRed += redPerTickBalls;
            ballsGreen += greenPerTickBalls;
            ballsBlue += bleuPerTickBalls;
            for(j=0; j<ball.length; j++){
                ball[j].style.backgroundColor = 'rgb(' + ballsRed + ', ' + ballsGreen + ', ' + ballsBlue + ')';
                ball[j].style.boxShadow = '0 0 40px rgb(' + ballsRed + ', ' + ballsGreen + ', ' + ballsBlue + ')';
                ball[j].style.color = 'rgb(' + ballsRed + ', ' + ballsGreen + ', ' + ballsBlue + ')';
            }
        }
    }
}


function variationCouleurBody(r, g, b, t, debut){ //t en seconde
    if (timer.textContent == debut){
        redPerTickBody = (r-bodyRed)/(t*100); //quantité de rouge a ajouter chaque 100-ième de sec
        greenPerTickBody = (g-bodyGreen)/(t*100);
        bleuPerTickBody = (b-bodyBlue)/(t*100);
    }
    if (timer.textContent > debut && timer.textContent <= debut+t){
        for (i = 0; i < t*100; i++){
            if(timer.textContent == debut+0.01*i){
                bodyRed += redPerTickBody;
                bodyGreen += greenPerTickBody;
                bodyBlue += bleuPerTickBody;
                body.style.backgroundColor = 'rgb(' + bodyRed + ', ' + bodyGreen + ', ' + bodyBlue + ')';
            }
        }
    }
}





function RedirectionJavascript(){
    document.location.href="index.html";
}


function collision(){
    for (let i = 0; i < ball.length; i++){
        if(Math.abs(stringToInt(ship.style.left)-stringToInt(ball[i].style.left)) < 35 && Math.abs(stringToInt(ship.style.top)-stringToInt(ball[i].style.top)) < 35){
            RedirectionJavascript();
        }
    }
}


//pour donner le mouvement aux differentes balls

//Pour faire des supers losanges >
//ball[i].style.left = stringToInt(ball[i].style.left)+ballSpeed*(Math.sin(deg)) + 'px';
//ball[i].style.top = stringToInt(ball[i].style.top)-ballSpeed*(Math.cos(deg)) + 'px';
function moveBalls(){
    for (i = 0; i < ball.length; i++){
        let deg = Number(ball[i].textContent);
        ball[i].style.left = stringToInt(ball[i].style.left)+ballSpeed*((Math.cos(deg*(Math.PI/180))/(Math.PI/180))/100) + 'px';
        ball[i].style.top = stringToInt(ball[i].style.top)-ballSpeed*((Math.sin(deg*(Math.PI/180))/(Math.PI/180))/100) + 'px';
        if (finDeBoucleActive){
            if (stringToInt(ball[i].style.left) > screen.width || stringToInt(ball[i].style.left) < -ballSize || stringToInt(ball[i].style.top) > screen.height || stringToInt(ball[i].style.top) < -ballSize){
                ball[i].style.display = 'none';
            }
        }
        else{
            if (deg < 90){
                if(stringToInt(ball[i].style.left) > screen.width-ballSize) {
                    ball[i].textContent = 90-(deg-90);
                }
                if(stringToInt(ball[i].style.top) < 0) {
                    ball[i].textContent = 360-deg;
                }
            }
            else if (deg < 180){
                deg -= 90;
                
                if(stringToInt(ball[i].style.left) < 0) {
                    deg += 90;
                    ball[i].textContent = 90-(deg-90);
                }
                if(stringToInt(ball[i].style.top) < 0) {
                    deg += 90;
                    ball[i].textContent = 360-deg;
                }
            }
            else if (deg < 270){
                deg -= 180;
                
                if(stringToInt(ball[i].style.left) < 0) {
                    deg += 180;
                    ball[i].textContent = 270-(deg-270);
                    if (ball[i].textContent == 360){
                        ball[i].textContent = 0;
                    }
                }
                if(stringToInt(ball[i].style.top) > screen.height-ballSize) {
                    deg += 180;
                    ball[i].textContent = 360-deg;
                }
            }
            else{
                deg -= 270;
                
                if(stringToInt(ball[i].style.left) > screen.width-ballSize) {
                    deg += 270;
                    ball[i].textContent = 270-(deg-270);
                    if (ball[i].textContent == 360){
                        ball[i].textContent = 0;
                    }
                }
                if(stringToInt(ball[i].style.top) > screen.height-ballSize) {
                    deg += 270;
                    ball[i].textContent = 360-deg;
                }
            }
        }
    }
}

function creationLinearBall(deg, x, y){
    balls.innerHTML += '<div class="ball">' + deg + '</div>';
    ball[ball.length-1].style.left = x + 'px';
    ball[ball.length-1].style.top = y + 'px';
}


//on donne 'XXXXpx' et nous renvoie XXXX sous forme de nombre.
function stringToInt(string){
    let total = '';
    for(let i = 0; i < string.length-2; i++){
        total += string[i];
    }
    return(Number(total));
}

//donne un entier aleatoire en min et max.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function fpsMeter() {
    let prevTime = Date.now(),
    frames = 0;

    requestAnimationFrame(function loop() {
        const time = Date.now();
        frames++;
        if (time > prevTime + 1000) {
            let fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
            prevTime = time;
            frames = 0;

            fpsCounter.innerHTML = fps;
        }
        
        requestAnimationFrame(loop);
        
    });
}