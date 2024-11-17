const submit = document.getElementById('submit');
const mostrarCheckbox = document.getElementById('mostrar');
const contraseñaInput = document.getElementById('contraseña');

mostrarCheckbox.addEventListener('change', () => {
    if (mostrarCheckbox.checked) {
        contraseñaInput.type = 'text'; // Cambia a texto para mostrar la contraseña
    } else {
        contraseñaInput.type = 'password'; // Cambia a contraseña para ocultar
    }
});



function login() {
    const username = document.getElementById("Usuario").value;
    const password = document.getElementById("contraseña").value;
    const storedUserData = localStorage.getItem(username);
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (userData.Contraseña === password) {
            alert("Inicio de sesión exitoso");
            return {Success: true, usuario: username};
        }
    }
    alert("Usuario o contraseña incorrectos");
    return {Success:false};
}



const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = login();
    if (result.Success) {
        if (localStorage.getItem('INFORMACION')) {
            localStorage.removeItem('INFORMACION');
        }
        localStorage.setItem('INFORMACION', result.usuario);
        window.location.href = "Carga.html";
    }
});

