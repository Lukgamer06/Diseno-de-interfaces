function cerrarSesion(){
    localStorage.removeItem('INFORMACION');
    alert('Cerrando Sesion');
    window.location.href = 'MenuAcceso.html' ;
}