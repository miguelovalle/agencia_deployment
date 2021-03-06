// importar express
const express= require('express');
const path=require('path');
const bodyParser=require('body-parser');
const routes = require('./routes');

const db=require('./config/database');
/*
db.authenticate()
    .then(() => console.log('La BD se conecto'))
    .catch(error => console.log('error en la conexion'))
*/

const configs = require('./config');

// configurar express
const app=express();

//validar si estamos en desarrollo o produccion
const config=configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo=config.nombresitio;

// habilitar pug
app.set('view engine', 'pug');

// añadir las vistas
app.set('views',path.join(__dirname,'./views'));

//Cargar la carpeta estatica public
app.use(express.static('public'));

// muestra el año actual y genera la ruta
app.use((req, res, next) => {
    // crear nueva fecha
    const fecha= new Date();
    res.locals.fechaActual=fecha.getFullYear();
    res.locals.ruta=req.path;
    return next();
})


// ejecutamos el bodyparser
app.use(bodyParser.urlencoded({extended: true}));

// cargar las rutas
app.use('/', routes());

app.listen(3000);
