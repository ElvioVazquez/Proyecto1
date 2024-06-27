document.getElementById('magia').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    if (nombre.trim() !== "") {
        document.getElementById('nombreSpan').textContent = nombre;
        document.getElementById('resultado').classList.remove('hidden');
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});