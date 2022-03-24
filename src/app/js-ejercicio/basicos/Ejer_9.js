const btnEjer_9 = document.querySelector('.btnEjer_9');
const Resultado = document.querySelector('.Ejer_9 .Resultado');

const Operaciones = (num1, num2) =>{
  const opr = `
    <p>Los datos de entrada son:</p>
    <p>num1 = ${num1} y num2 = ${num2}</p>
    <p>La suma es:           ${num1 + num2}</p>
    <p>La resta es:          ${num1 - num2}</p>
    <p>La multiplicacion es: ${num1 * num2}</p>
    <p>La division es:       ${num1 / num2}</p>
  `;
  return opr;
}
const Ejer_9 = (num1, num2) => {
  num1 = prompt('ingrese el primer numero');
  num2 = prompt('ingrese el segundo numero');
  if (parseInt(num1) >= 0 & parseInt(num2) >= 0) {
    console.log(Operaciones(parseInt(num1), parseInt(num2)));
    Resultado.innerHTML = Operaciones(parseInt(num1), parseInt(num2))
  }
  else{
    alert('Ingreso un numero mal, debe colocar numeros');
    Resultado.innerHTML = '<span style="font-weight: 900; color:red; font-size: 2em; margin:1.5em;">ERROR.</span>'
  }
}

btnEjer_9.addEventListener('click', ()=>Ejer_9());
