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
    player.style.right = (screen_dimensions[0] / 2) - 50 + 'px';
    player.style.top = (screen_dimensions[1] / 2) - 45 + 'px';


    main.appendChild(player);
}


document.addEventListener('DOMContentLoaded', () => {
    setup();
});

function move(direction) {
    
    if ((direction == 'left') || (direction == 'right')) {

        var postion = (player.style.right).match(/\d+/g);
        postion = parseInt(postion);

        if (direction == 'left') {

            console.log(postion)
            player.style.right = (postion + 10) + 'px';
        }

        if (direction == 'right') {

            console.log(postion)
            player.style.right = (postion - 10) + 'px';
        }
    }
    

}

document.addEventListener('keydown', function(event) {

    if(event.keyCode == 37) {
        var direction = 'left';
        move(direction);
    }
    if(event.keyCode == 38) {
        console.log('up');
    }
    if(event.keyCode == 39) {
        var direction = 'right';
        move(direction);
    }
    if(event.keyCode == 40) {
        console.log('down');
    }
    if(event.keyCode == 32) {
        console.log('space');
    }

});
