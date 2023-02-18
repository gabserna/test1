let flamingo = document.querySelector('.flamingo');

function onPageLoad() {
    movingImage();
}

function movingImage() {
    flamingo.style.position="absolute";
    flamingo.style.left="30px";
    flamingo.style.top="30px";

    function movingDown(){
        flamingo.animate([
            { transform: 'translateY(700px)'},
            { transform: 'translateY(0px)'},
        ], {
            duration: 1500,
            iterations: Infinity
        }, 
        );
        }
        
    movingDown()
}

window.onload = onPageLoad;