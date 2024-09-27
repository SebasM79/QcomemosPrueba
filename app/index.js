// Importar dependencias
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"; // Importar mongoose para conectarse a la base de datos
import { fileURLToPath } from 'url';
import path from 'path';
import { register, login } from "./controller/autenticacion.controller.js"; // Importar funciones del controlador

// Inicializar la aplicación
const app = express();
const PORT = process.env.PORT || 4000;
// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar middleware
app.use(bodyParser.json()); // Para analizar el cuerpo de la solicitud en formato JSON
app.use(express.static(path.join(__dirname, "public/css"))); // Archivos estáticos
app.use(express.static(path.join(__dirname, "front/img")));
app.use(express.static(path.join(__dirname, "register/img")));
app.use(express.static(path.join(__dirname, "front")));
app.use(express.static(path.join(__dirname, "lugares")));
app.use(express.json()); // Para leer JSON

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://almaypapa0304:almaypapa0304@qcomemos.bpclx.mongodb.net/')
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch(err => console.log('Error al conectar con MongoDB Atlas: ', err));
  


// Configuración de rutas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "front/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "front/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "front/register.html")); // Cambiar a register.html
});

// Rutas para API
app.post('/api/register', register); // Post para registro
app.post("/api/login", login); // Post para login

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
