// Llamad de librerias
const express = require("express");
const cors = require('cors')
const path = require("path");
const cookieParser = require("cookie-parser");const app = express();
const session = require('express-session')
const methodOverride = require("method-override"); // usamos method override para manejar diferentes solicitudes

// decimos que si algun puerto esta ocupado use el 3000
const port = process.env.port || 3000;

// Configurar la carpeta pública para servir archivos estáticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico, {
    extensions: ['css'],
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));
app.use(cors())
// Utilizar peticiones PUT and Delete 
app.use(methodOverride("_method"));
// implementacion de cookies
app.use(cookieParser())
// Utilizar las sesiones
app.use(session({
    secret: 'mis notas secretas',
    resave: false,
    saveUninitialized: false,
    coockie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
    }
}))

// Implementamos EJS como motor de vista
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// ruta principal
app.use("/", require("./routers/mainRouter.routes.js"));
app.use("/alumnos", require("./routers/userRoutes.routes.js"));
app.use('/profes', require('./routers/profes.routes.js'))
// usamos urlencoded
app.use(express.urlencoded({ extended: true }));

// como es una DEMO trabajamos con json para simular una BD(Base de Datos)
app.use(express.json());

// hacemos la escucha en el puerto 3000 y decimos que mande por consola "server corriendo"
app.listen(port, () => console.log("Server corriendo"));
