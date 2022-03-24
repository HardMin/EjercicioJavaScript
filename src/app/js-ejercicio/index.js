const btnEjer_11 = document.querySelector('.btnEjer_11');
const inpEjer_11 = document.querySelector('.Ejer_11 .content_inp input');
const Resultado = document.querySelector('.Ejer_11 .Resultado');
const btnEnviar = document.querySelector('.Ejer_11 .btnEnviar');
const parValidation = document.querySelector('.Ejer_11 .parValidation');
const imparValidation = document.querySelector('.Ejer_11 .imparValidation');
const btnControl = document.querySelectorAll('.Ejer_11 .content_lateral .btnControl span');

const inpAdd = document.querySelector('.Ejer_11 .agregar');
const inpBusqueda = document.querySelector('.Ejer_11 .busqueda');
const btnAdd = document.querySelector('.Ejer_11 .btnAgregar');
const btnBusqueda = document.querySelector('.Ejer_11 .btnBuscar');

let baseDatos = [];
const BuscarDato = ()=>{
  if (inpBusqueda.value.length > 1) {
    let busqueda = baseDatos.filter((dato) => {
      if (inpBusqueda.value == dato) {
        console.log(dato)
      }
    });
    console.log(busqueda)
  }
}
const AgregarDato = ()=>{
  if (inpAdd.value.length > 1) {
    baseDatos.push(`<span class="Datos">${inpAdd.value}</span>`)
    console.log(baseDatos)
    inpAdd.value = '';
    Resultado.innerHTML = baseDatos.map((dato)=> `<p>${dato}</p>`);
  }
}

btnAdd.addEventListener('click', ()=> AgregarDato());
inpAdd.addEventListener('keyup', (key)=>{if(key.key == 'Enter'){AgregarDato()}});
inpBusqueda.addEventListener('keyup', (key)=>{if(key.key == 'Enter'){BuscarDato()}});
//
// document.addEventListener('keyup', ()=> console.log('Hola Mundo'));

