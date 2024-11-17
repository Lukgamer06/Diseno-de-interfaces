function Datos() {
    const username = localStorage.getItem('INFORMACION'); 
    const storedUserData = localStorage.getItem(username);
    const datosDiv = document.getElementById("datos");
    
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        datosDiv.innerHTML = `
            <h2>Nombre: ${userData.Nombre}</h2> <br>
            <h2>Apellido: ${userData.Apellido}</h2><br>
            <h2>Fecha de nacimiento: ${userData.Nacimiento}</h2><br>
            <h2>Correo: ${userData.Correo}</h2><br>
            <h2>Carrera: ${userData.Carrera}</h2><br>
        `;
    } else {
        datosDiv.innerHTML = "<h2>No se encontraron datos del usuario.</h2>";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    Datos()
});e