balle = document.querySelector(".ball");
zombie = document.querySelector(".zombie");
plante = document.querySelector(".plant");
etatJeu = document.querySelector(".gamestat");

vieZombie = 100

plante.onclick = function() {
    // On met notre code de tire ici
    balleAnimation = setInterval(function() {
        balle.style.left = balle.offsetLeft + 5 + "px";
        if(balle.offsetLeft > zombie.offsetLeft + 40)
        {
            balle.style.display = "none";
            vieZombie = vieZombie - 20;

            if(vieZombie == 0)
            {
                zombie.src = "images/Zombie/ZombieDie.gif";
                etatJeu.innerHTML = "Vous avez gagné!";
            }

            clearInterval(balleAnimation);
        }
    }, 25);

    balle.style.left = "";
    balle.style.display = "";
}
