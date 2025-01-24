// Función para transformar el nombre a mayúsculas y mostrarlo en el elemento con ID "data"
function mostrarNombre(nombre) {
    document.getElementById("data").innerHTML = nombre.toUpperCase();
}

const yesBtn = document.querySelector('#yesBtn');

// Comportamiento del botón "Sí"
yesBtn.addEventListener('click', function () {
    alert('Ten por bonita'); // Puedes mandar los mensajes que quieras
    location.href = 'https://www.youtube.com/watch?v=aSjflT_J0Xo'; // Cambiar el URL en YouTube de la canción que quieras
});

const noBtn = document.querySelector('#noBtn');

// Comportamiento del botón "No"
noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);

    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
