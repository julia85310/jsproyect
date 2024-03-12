
const articulos = document.querySelectorAll('article');
const verduraDiv = document.querySelector(".verduras");

// Código para la animacion
articulos.forEach((articulo) => {
    articulo.addEventListener('mouseover', () => {
        // Agregar la clase detener-animacion a todos los elementos article
        articulos.forEach((a) => {
            a.classList.add('detener-animacion');
        });
    });

    articulo.addEventListener('mouseout', () => {
        // Quitar la clase detener-animacion de todos los elementos article
        articulos.forEach((a) => {
            a.classList.remove('detener-animacion');
        });
    });
});

//Codigo para la fecha
const fechaLabel = document.getElementById("fechaActual");

var fecha = new Date();

var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var año = fecha.getFullYear();

var fechaFormateada = dia + "/" + mes + "/" + año;

fechaLabel.textContent += fechaFormateada;
