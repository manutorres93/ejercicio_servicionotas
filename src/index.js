const express = require('express');
const bodyParser = require('body-parser') //la instalo con npm install body-parser, y la tengo que llaamr desde este index principal. es para el post
//esta ruta es para entender lo que trae el body y decodificarlo en json
const connectDB = require('./config/database');
const routes = require('./routes/routes');

const app = express();
const port = 3000;

// Conecta a la base de datos MongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configura las rutas
app.use('/', routes);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));