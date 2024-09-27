import express from "express";
// fix para _dirname
import mongoose from "mongoose";// importar mongoose para conectarse a la base de datos   

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://almaypapa0304:almaypapa0304@qcomemos.bpclx.mongodb.net/')
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch(err => console.log('Error al conectar con MongoDB Atlas: ', err));

  // separacion con logica de conexion
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as autenticacion } from "./controller/autenticacion.controller.js";

//servidor
const app = express();// crea una instancia de express
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor escuchando en el puerto ", app.get("port"));

//configuracion de archivos estaticos
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/front/img"));
app.use(express.static(__dirname + "/register/img"));
app.use(express.static(__dirname + "/front"));
app.use(express.static(__dirname + "/lugares"));
app.use(express.json());// esto configuara que puede leer json


//rutas
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/front/home.html");
});
//app.get("/login", (req, res) => {
//  res.sendFile(__dirname + "/lugares.html");
//});
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/front/login.html");
});
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/front/register.html");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/front/register.html"); // Cambiar a register.html
});


app.post("/api/register",autenticacion.register);// post porque es un registro
app.post("api/login",autenticacion.login)// post porque es un registro