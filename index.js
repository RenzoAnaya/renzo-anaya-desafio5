const express = require('express');
const app = express();
const morgan = require('morgan');
const routeProducts = require('./routes/productRoutes');
const fs = require ('fs');
const PORT = 8080;



app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');



app.use('/api/products', routeProducts);


app.get('/',(req,res)=>{
    res.redirect('/api/products')
}
);


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
