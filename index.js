const express = require('express');
const app = express();
const morgan = require('morgan');
const routeProducts = require('./routes/productRoutes');
const fs = require ('fs');
const PORT = 8080;


//** Middlewares */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// express.static hace publicos los archivos estaticos (pej:css-html-jpg) 
// que esten es la ruta que yo le indique.
//app.use(express.static(__dirname + "/public"));
app.use('/api/products', routeProducts);
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('index',{
        title:"Productos Renzo"
    })
})


function onInit() {
    console.log('App iniciada');
}


try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}

onInit();
