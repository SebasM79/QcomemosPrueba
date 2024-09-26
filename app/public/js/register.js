document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.children.email.value);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json());
})  