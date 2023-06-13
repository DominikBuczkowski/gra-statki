function createDiv(classname) {
    var div = document.createElement('div');
    div.classList.add(classname);
    return div;

}

function setup() {

    const main = document.getElementById('main');

    var screen_dimensions = [window.innerWidth, window.innerHeight]
    
    main.style.width = (screen_dimensions[0] - 100 ) + 'px';
    main.style.height = (screen_dimensions[1] - 100 ) + 'px';

    var player = createDiv('player');
    player.setAttribute('id', 'player');
    player.style.width = 100 + 'px';
    player.style.height = 90 + 'px';
    player.style.backgroundImage = 'url("img/player.png")';
    player.style.backgroundRepeat = 'no-repeat';
    player.style.backgroundPosition = 'center';
    player.style.backgroundColor = 'red';
    player.style.position = 'absolute';
    player.style.transform = 'rotate(-90deg)';
    main.style.cursor = 'none';

    main.appendChild(player);
}


document.addEventListener('DOMContentLoaded', () => {
    setup();

    const mousePosText = document.getElementById('mouse-pos');
        let mousePos = { x: undefined, y: undefined };

        window.addEventListener('mousemove', (event) => {
        mousePos = { x: event.clientX, y: event.clientY };

        if (mousePos.x <= 90) { 
            player.style.left = 45 + 'px';
        }
        else if (mousePos.x >= (window.innerWidth - 98)) {
            
        }
        else {
            player.style.left = (mousePos.x - 45) + 'px';
        }

        if (mousePos.y <= 100) {
            player.style.top = 55 + 'px';
        }
        else if (mousePos.y >= (window.innerHeight - 93)) {
            
        }
        else {
            player.style.top = (mousePos.y - 50) + 'px';
        }

        });

        document.addEventListener('keydown', function(event) {
            if(event.keyCode == 32) {
                console.log('space');
            }
        });



});

