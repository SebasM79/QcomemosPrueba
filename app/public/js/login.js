// Escucha el evento submit en el formulario de login
document.querySelector(".login-button").addEventListener("click", (event) => {
    event.preventDefault(); // Evita que se recargue la página

    // Captura los valores de los campos de email y contraseña
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verifica que ambos campos tengan datos
    if (email && password) {
        const data = { email, password };

        // Enviar los datos al servidor usando fetch con POST
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Convertir el objeto de datos a JSON
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Si el login es exitoso, redirige a otra página o muestra un mensaje
                    window.location.href = "/dashboard"; // Ejemplo: redirigir al dashboard
                } else {
                    // Si falla, mostrar un mensaje de error
                    alert("Email o contraseña incorrectos");
                }
            })
            .catch((error) => console.error("Error:", error));
    } else {
        alert("Por favor, ingresa email y contraseña.");
    }
});
