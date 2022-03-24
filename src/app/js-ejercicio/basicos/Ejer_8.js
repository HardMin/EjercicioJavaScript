
const btnEjer_8 = document.querySelector('.btnEjer_8');
const Resultado = document.querySelector('.Ejer_8 .Resultado');

const printTabla = (num) => {
  const mult = [1,2,3,4,5,6,7,8,9,10];
  const multiplicacion = mult.map((mult, index, array)=> {
    let multiplicar = mult * num;
    let msgTabla = `
      <span style="text-align:left;font-weight:bold; 
      margin-left:2em;margin-bottom: -.9em; display:block;">${num} x ${array[index]} = ${multiplicar}</span>`;
    return msgTabla; 
  });
  return multiplicacion;
}
const Ejer_8 = (num) => {
  num = prompt('Ingrese el numero a multiplicar')
  console.log(printTabla(num));
  Resultado.innerHTML = printTabla(num).join('</br>');
}

btnEjer_8.addEventListener('click', ()=>Ejer_8(true));
