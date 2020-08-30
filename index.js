
var numOfDrums = document.querySelectorAll('.drum').length;
for (var i = 0; i < numOfDrums; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });


}
document.addEventListener('keypress', function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case 'a':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 's':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'd':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'f':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'g':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'h':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'j':
            var bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
            break;


        default:
            break;

    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector('.' + currentkey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed')
    }, 100);
}


