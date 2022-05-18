const express = require('express');
const morgan = require('morgan');
const routeProducts = require('./routes/productRoutes');
const app = express();
const PORT = 8080;


//** Middlewares */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// express.static hace publicos los archivos estaticos (pej:css-html-jpg) 
// que esten es la ruta que yo le indique.
app.use(express.static(__dirname + "/public"));



/** ROUTER */
// Nota: recordar que todas las subrutas necesitan esta ruta base.


app.use('/api/products', routeProducts);




function onInit() {
    console.log('App iniciada');
}

/** CONNECTION SERVER */

try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}

onInit();
