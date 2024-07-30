document.getElementById('openSecondDimension').addEventListener('click', function () {
    // Abrir una nueva pestaña con la segunda dimensión
    const newWindow = window.open('dimension2.html', '_blank');

    // Enviar un mensaje a la nueva pestaña después de un retraso para simular el movimiento de la bola
    setTimeout(() => {
        if (newWindow) {
            newWindow.postMessage('startAnimation', '*');
        }
    }, 5000); // 5 segundos de espera antes de enviar el mensaje
});
