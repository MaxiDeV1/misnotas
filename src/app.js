const express = require('express');
const path = require('path')
const coockie = require('cookie-parser')
const app = express();

// usamos method override para manejar diferentes solicitudes
const methodOverride = require('method-override')
// decimos que si algun puerto esta ocupado use el 3000 
const port = process.env.port || 3000;
// Configurar la carpeta pública para servir archivos estáticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));
app.use(methodOverride("_method"))
app.use(coockie())
// Implementamos EJS como motor de vista
app.set('view engine', 'ejs');                  
app.set('views', path.resolve(__dirname,'views'));
// ruta principal
app.use('/',require('./routers/mainRouter.js'))
app.use('/alumnos',require('./routers/userRoutes.js'))
// usamos urlencoded 
app.use(express.urlencoded({extended: false}))
// como es una DEMO trabajamos con json para simular una BD(Base de Datos)
app.use(express.json())
// hacemos la escucha en el puerto 3000 y decimos que mande por consola "server corriendo"
app.listen(port,() => console.log('Server corriendo'))
