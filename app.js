// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminamos espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Verificar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en el HTML
    actualizarListaAmigos();

    // Limpiar el input
    input.value = "";
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 personas para hacer el sorteo.");
        return;
    }

    let sorteados = [...amigos]; // Copia del array original
    let resultado = {};

    // Algoritmo para asignar amigos secretos sin que se repitan
    for (let i = 0; i < amigos.length; i++) {
        let posibles = sorteados.filter((nombre) => nombre !== amigos[i]); // No puede salir su propio nombre

        if (posibles.length === 0) {
            // Si el último no tiene opciones válidas, reiniciamos el sorteo
            return sortearAmigo();
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[amigos[i]] = elegido;

        // Eliminar el nombre ya asignado
        sorteados = sorteados.filter((nombre) => nombre !== elegido);
    }

    mostrarResultados(resultado);
}

// Función para mostrar los resultados en la lista del HTML
function mostrarResultados(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar lista antes de actualizar

    for (let [amigo, secreto] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${secreto}`;
        resultadoLista.appendChild(li);
    }
}
