
const btnEjer_4 = document.querySelector('.btnEjer_4');
const inpEjer_4 = document.querySelector('.content_inp input')
const Resultado = document.querySelector('.Resultado');
const btnEnviar = document.querySelector('.btnEnviar')
const printNumPar = (par, num)=>{
  num = 0;
  for (let i = 1; i <= (par/2); i++) {
    num += 2;
    return num;
  };
}
const Ejer_4 = (btn, inp)=>{
  const btnFunction = ()=>{
    let inpData = prompt('Ingrese dos numeros para mostrar todos los numeros de dos en dos');
    if (inpData != '' & parseInt(inpData) > 0) {
      console.log(printNumPar(parseInt(inpData)));
    }else{console.log('Lo siento no puedo mostrar ningun dato, por falta de numeros')};
  };
  const inpFunction = ()=>{
    if (inpEjer_4.value != '' & parseInt(inpEjer_4.value) > 0) {
      Resultado.textContent = printNumPar(parseInt(inpEjer_4.value));
      inpEjer_4.value = '';
    }
    Resultado.textContent = `Error, se esperaba un numero entero par. No se esperaba ${inpEjer_4.value}`;
    inpEjer_4.value = '';
  };
  if (btn) {
    btnFunction();
  };
  if (inp) {
    inpFunction()
  }
}

btnEnviar.addEventListener('click', ()=>Ejer_4(false, true))

btnEjer_4.addEventListener('click', ()=>Ejer_4(true));
