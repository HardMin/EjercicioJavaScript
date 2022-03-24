
const btnEjer_5 = document.querySelector('.btnEjer_5');
const inpEjer_5 = document.querySelector('.Ejer_5 .content_inp input');
const Resultado = document.querySelector('.Ejer_5 .Resultado');
const btnEnviar = document.querySelector('.Ejer_5 .btnEnviar');

const printNumberImpar = (dato, num)=>{
  num = [];
  for(let i = 1; i <= dato; i++){
    num.push(i);
  };
  const numImpar = num.filter((num)=> num % 2 != 0);
  return numImpar.join(' ');
};
const Ejer_5 = (btn, inp)=>{
  const btnFunction = (num)=>{
    num = prompt('Ingrese el numero a procesar')
    if (parseInt(num) > 0){
      console.log(printNumberImpar(parseInt(num)));
      alert(`Los numeros impares son ${printNumberImpar(num)}`)
    }     
    else{
      alert('No se pudo procesar los datos, no introdujo un numero');
    };
  };
  const inpFunction = (num, data)=>{
    num = inpEjer_5.value;
    if (parseInt(num) > 0) {
      data = printNumberImpar(num);
      Resultado.textContent = "Los numeros impares son: " + data;
      inpEjer_5.value = '';
    }
    else{
      Resultado.textContent = 'No se pudo procesar los datos, no introdujo un numero';
    };
  };
  if (btn) {
    btnFunction()
  };
  if (inp) {
    inpFunction()
  };
}
btnEnviar.addEventListener('click', ()=>Ejer_5(false, true));
document.addEventListener('keyup', (key)=>{if(key.key == 'Enter')Ejer_5(false,true)});
btnEjer_5.addEventListener('click', ()=>Ejer_5(true));

