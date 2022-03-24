
const btnEjer_6 = document.querySelector('.btnEjer_6');
const Resultado = document.querySelector('.Ejer_6 .Resultado');
const Ejer_6 = (num)=>{
  num = prompt('ingrese un numero');
  const NumsDivisores = [];
  for(let i = 1; i <= parseInt(num); i++){
    if (num % i == 0) {
      console.log(i);
      NumsDivisores.push(i)
    }
  }
  Resultado.textContent = `El numero ingresado es ${num}. \n Y sus divisores son: \n ${NumsDivisores.join('-')}`;
};
btnEjer_6.addEventListener('click', ()=>Ejer_6());
