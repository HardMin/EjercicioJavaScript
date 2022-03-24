const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

//settings
app.set('port', process.env.PORT || port);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

//middLewares
app.use((req,res,next)=>{
    console.log(`${req.url} ${req.method}`);
    next();
});

//routes
app.use(require('./src/routes/index'))

//files static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src/styles/css')));
app.use(express.static(path.join(__dirname, 'src/assets')));
app.use(express.static(path.join(__dirname, 'src/app/js-ejercicio')))
// app.use(express.static(path.join(__dirname, 'src/app/build')))

//listen
app.listen(app.get('port'), ()=>console.log(`Activado en el puerto ${app.get('port')}`));
