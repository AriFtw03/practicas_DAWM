const botonColor = document.getElementById("colorButton");

const colores = [
    "#f3eee3", // Beige cálido
    "#fffaf3", // Crema
    "#d4a373", // Marrón latte
    "#b7e4c7", // Verde menta
    "#a2d2ff", // Azul cielo
    "#ffc8dd", // Rosa pastel
    "#ffe5b4"  // Amarillo dorado
];

let indice = 0;

botonColor.addEventListener("click", () => {
    indice = (indice + 1) % colores.length;
    document.body.style.backgroundColor = colores[indice];
    document.body.style.transition = "background-color 0.8s ease";
});


