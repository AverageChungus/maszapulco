const Mosze = {
   x: 0,
   y: 0,
   width: 80,
   height: 80,
};
const BlueBall = {
    x: 0,
    y: 0,
    width: 80,
    height: 80,
 };

 const RedBall = {
    x: 0,
    y: 0,
    width: 80,
    height: 80,
 };

function main () {
    var d = document.getElementById("Mosze");
    d.style.width = Mosze.width+"px";
    d.style.height = Mosze.height+"px";
    d.style.backgroundSize = `${Mosze.width}px ${Mosze.height}px`;

    d = document.getElementById("BlueBall");
    d.style.width = BlueBall.width+"px";
    d.style.height = BlueBall.height+"px";
    d.style.backgroundSize = `${BlueBall.width}px ${BlueBall.height}px`;
    BlueBall.x = Math.random () *(window.innerWidth - BlueBall.width);
    BlueBall.y = Math.random () *(window.innerHeight - BlueBall.height);
    d.style.left = BlueBall.x+"px";
    d.style.top = BlueBall.y+"px";

    d = document.getElementById("RedBall");
    d.style.width = RedBall.width+"px";
    d.style.height = RedBall.height+"px";
    d.style.backgroundSize = `${RedBall.width}px ${RedBall.height}px`;
    RedBall.x = Math.random () *(window.innerWidth - RedBall.width);
    RedBall.y = Math.random () *(window.innerHeight - RedBall.height);
    d.style.left = RedBall.x+"px";
    d.style.top = RedBall.y+"px";


    document.onkeydown = function keydown(e) {
        switch (e.code) {
            case "ArrowLeft":
                Mosze.x = Math.max (Mosze.x - 20, 0);
                break;
            case "ArrowRight":
                Mosze.x = Math.min (Mosze.x + 20, window.innerWidth - Mosze.width);
                break;
            case "ArrowUp":
                Mosze.y = Math.max (Mosze.y - 20, 0);
                break;
            case "ArrowDown":
                Mosze.y = Math.min (Mosze.y + 20, window.innerHeight - Mosze.height);
                break;
        }
        var d = document.getElementById("Mosze");
        d.style.left = Mosze.x+"px";
        d.style.top = Mosze.y+"px";

        if (Mosze.x <  BlueBall.x + BlueBall.width &&
            Mosze.x + Mosze.width > BlueBall.x &&
            Mosze.y < BlueBall.y + BlueBall.height &&
            Mosze.y + Mosze.height > BlueBall.y) {
                Mosze.height = 320;
                Mosze.width = 320;
        }

        if (Mosze.x + (Mosze.width-80)/2 <  RedBall.x + RedBall.width &&
            Mosze.x + (Mosze.width-80)/2 + 80 > RedBall.x &&
            Mosze.y + (Mosze.height-80)/2 < RedBall.y + RedBall.height &&
            Mosze.y + (Mosze.height-80)/2 + 80 > RedBall.y) {
                Mosze.height = 80;
                Mosze.width = 80;
        }
        d.style.width = Mosze.width+"px";
        d.style.height = Mosze.height+"px";
        d.style.backgroundSize = `${Mosze.width}px ${Mosze.height}px`;
    }
}
window.onload = main; 