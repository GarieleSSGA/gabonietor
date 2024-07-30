// Escuchar el evento de mensaje para comenzar la animación
window.addEventListener('message', function (event) {
    if (event.data === 'startAnimation') {
        const ball2 = document.getElementById('ball2');
        ball2.style.animation = 'moveLeft 5s forwards, merge 5s forwards 5s';
    }
});
