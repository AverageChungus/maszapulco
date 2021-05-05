function main () {
    let x=0;
    let y=0;
    const width = 40;
    const height = 40;
    document.onkeydown = function keydown(e) {
        switch (e.code) {
            case "ArrowLeft":
                x = Math.max (x - 20, 0);
                break;
            case "ArrowRight":
                x = Math.min (x + 20, window.innerWidth - width);
                break;
            case "ArrowUp":
                y = Math.max (y - 20, 0);
                break;
            case "ArrowDown":
                y = Math.min (y + 20, window.innerHeight - height);
                break;
        }
        var d = document.getElementById("Mosze");
        d.style.left = x+"px";
        d.style.top = y+"px";
    }
}
window.onload = main; 