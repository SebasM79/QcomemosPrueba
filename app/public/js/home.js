// Seleccionar los botones
const exploreButton = document.querySelector(".explore-button");
const addButton = document.querySelector(".add-button");

// Añadir eventos para los botones
exploreButton.addEventListener("click", () => {
    // Redirigir o mostrar un mensaje para explorar lugares
    window.location.href = "/explorar"; // Redirigir a una nueva página para explorar
});

addButton.addEventListener("click", () => {
    // Redirigir o mostrar un mensaje para agregar lugares
    window.location.href = "/agregar"; // Redirigir a una página para agregar nuevos lugares
});
