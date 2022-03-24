// const ejer = require('./ejercicios/index');

//style general
const style = '/style.css';

const Home = (req,res)=>{
    res.render('index',{
        title: 'Ejercicios',
        style,
        styleHome: 'home.css',
        head: 'layout/headHome',
        content: 'content/contentHome',
        header: 'layout/header',
        footer: 'layout/footer' 
    });
}
//Ejercicios

const EjerBasico = (req,res)=>{
    // const script = '/index.ejercicio.min.js';
    const script = '/index.js';
    res.render('ejercicios',{
        title: 'Ejercicios',
        style,
        styleEjercicios: '/ejercicios.css',
        head: 'layout/headEjercicios',
        content: 'content/ejerciciosJavascript',
        header: 'layout/header',
        script,
        footer: 'layout/footer' 
    })
};
 
module.exports = {
    Home,
    EjerBasico
}
