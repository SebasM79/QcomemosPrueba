document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch("/api/register", { // Asegúrate de que esta ruta tenga el prefijo "/"
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data); // Verificar la respuesta
        if (data.message) {
            alert(data.message); // Mostrar mensaje de éxito
        }
    })
    .catch((error) => console.error("Error:", error));
});
