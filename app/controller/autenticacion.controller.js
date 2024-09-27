// autanticacion.controller.js

import User from '../models/user.js'; // Asegúrate de que esto apunte correctamente a tu modelo de usuario
import bcrypt from 'bcrypt';

// Función de registro
export const register = async (req, res) => {
    const { email, password } = req.body;
    
    // Aquí va la validación
    if (!email || !password) {
        return res.status(400).send("Todos los campos son obligatorios");
    }

    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Crear un nuevo usuario
    const newUser = new User({ email, password: hashedPassword });
    
    // Guardar en la base de datos
    await newUser.save();
    res.status(201).send("Usuario registrado con éxito");
};

// Función de inicio de sesión
export const login = async (req, res) => {
    const { email, password } = req.body;
    
    // Aquí va la validación
    if (!email || !password) {
        return res.status(400).send("Todos los campos son obligatorios");
    }

    // Lógica para encontrar el usuario y verificar la contraseña
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send("Usuario no encontrado");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).send("Contraseña incorrecta");
    }

    res.status(200).send("Inicio de sesión exitoso");
};
