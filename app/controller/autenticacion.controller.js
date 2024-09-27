import mongoose from "mongoose";

// Esquema del usuario
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Modelo del usuario
const User = mongoose.model("User", userSchema, "usuarios");

// Registrar usuario
async function register(req, res) {
  console.log(req.body);
  const { email, password, password2 } = req.body;

  // Validar que todos los campos estén completos
  if (!email || !password || !password2) {
    return res.status(400).send("Todos los campos son obligatorios");
  }

  // Verificar si el usuario ya existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "El usuario ya existe" });
  }

  // Crear un nuevo usuario
  const newUser = new User({ email, password });
  await newUser.save();
  alert("nuevo usuario", newUser);

  res.status(201).json({ message: "Usuario registrado con éxito" });
}

// Inicio de sesión
async function login(req, res) {
  const { email, password } = req.body;

  // Verificar si el usuario existe
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  res.status(200).json({ message: "Inicio de sesión exitoso" });
}

export const methods = {
  login,
  register,
};
