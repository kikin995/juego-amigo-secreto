// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    const input = document.getElementById('amigo')
    const nombre = input.value.trim()

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre)
        input.value = ''
        mostrarAmigos()
    } else {
        alert('Por favor, ingresa un nombre válido y que no esté repetido.')
    }
}
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    if (!lista) return;
    lista.innerHTML = '';
    amigos.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }

    // Elegir un nombre aleatorio
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];

    // Mostrar el ganador en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> el amigo secreto es ${ganador}</li>`;

    // Reiniciar la lista de amigos y la visualización
    amigos = [];
    mostrarAmigos();
}
function reiniciar() {
    amigos = [];
    mostrarAmigos();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}



