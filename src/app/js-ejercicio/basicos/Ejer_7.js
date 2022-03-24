
const btnEjer_7 = document.querySelector('.btnEjer_7');
const Resultado = document.querySelector('.Ejer_7 .Resultado');
const parValidation = document.querySelector('.Ejer_7 .parValidation');
const imparValidation = document.querySelector('.Ejer_7 .imparValidation');



const validation = (num)=>{
  if(num > 0){
    if (num % 2 == 0) {
      parValidation.style.cssText = 'background: green;';
      imparValidation.style.cssText = 'background: red;';
      Resultado.textContent = `El numero "${num}" es un numero Par!`;
    };
    if (num % 2 != 0) {
      imparValidation.style.cssText = 'background: green;';
      parValidation.style.cssText = 'background: red;';
      Resultado.textContent = `El numero "${num}" es un numero Impar!`;
    }
  }else{
    imparValidation.style.cssText = 'background: red;';
    parValidation.style.cssText = 'background: red;';
    Resultado.innerHTML = `<span style="color:red;">ERROR.</span> <span>El dato "${num}" no es un numero mayor que 0.!</span>`;
    setTimeout(()=>{    
      alert(`No es valido el dato "${num}", debe ser un numero mayor que 0.`);
    }, 400)
    Ejer_7()
  }
}

const Ejer_7 = (num)=>{
  num = prompt('Ingrese un numero');
  validation(num)
}

btnEjer_7.addEventListener('click', ()=>Ejer_7());
