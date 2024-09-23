import express from "express";
// fix para _dirname

import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//servidor
const app = express();// crea una instancia de express
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor escuchando en el puerto ", app.get("port"));

//configuracion de archivos estaticos
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/front/img"));

//rutas

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/front/home.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/front/login.html");
});
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/front/register.html");
});