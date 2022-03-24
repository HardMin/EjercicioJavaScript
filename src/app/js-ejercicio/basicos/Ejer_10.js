
const btnEjer_10 = document.querySelector('.btnEjer_10');
const Resultado = document.querySelector('.Ejer_10 .Resultado');
const btnControl = document.querySelectorAll('.Ejer_10 .content_lateral .btnControl span');

let nums = [];
let numsNormal = [];
let num = '';
const Ejer_10 = (control) => {
  console.log(control)
  if (control == undefined) {
    if (numsNormal.length > 0 & num.length > 0) {
      nums = [];
      numsNormal = [];
    }
    num = prompt('Introduce 6 numeros');
    if (typeof parseInt(num) != typeof 0 || num.length < 6) {
      return alert('lo siento, pero debe ingresar 6 numeros');
    }
    for(let i of num){
      nums.push(i);
      numsNormal.push(i);
    }
  }
  const msj = [
      ` <p>Los numeros ingresados son: ${num} </p>
      <p>La longitud: (${nums.length})</p>
      <p>Los numeros en el array: ['${numsNormal.join("'], ['")}']</p>
      `, 
      `
      <p>Los numeros ingresados son: ${num} </p>
      <p>La longitud: (${nums.length})</p>
      <p>Los numeros en el array: ['${nums.sort().join("'], ['")}']</p>
      `, 
      `
      <p>Los numeros ingresados son: ${num} </p>
      <p>La longitud: (${nums.length})</p>
      <p>Los numeros en el array: ['${nums.reverse().join("'], ['")}']</p>
      ` 
  ]
  console.log(nums)
  switch(control){
    case 'orden':
      return Resultado.innerHTML = msj[1]
    case 'invertir':
      return Resultado.innerHTML = msj[2]
    default:
      return Resultado.innerHTML = msj[0]
  }
};
btnControl.forEach(span => {
  span.addEventListener('click', ()=> Ejer_10(span.getAttribute('class')))
});
btnEjer_10.addEventListener('click', ()=>Ejer_10());
