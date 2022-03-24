

const inpEjer_3 = document.querySelector('.content_inp input');
const btnEnviar = document.querySelector('.btnEnviar')
const Resultado = document.querySelector('.Resultado')

const btnEjer_3 = document.querySelector('.btnEjer_3')
let register = 0;
const Ejer_3 = (btn, inp)=>{
  const btnFunction = (stateNum, bool)=>{
    let registerTotal = 0;
    bool = true;
    while(true){
      if (!bool) {
        stateNum = prompt(`Llevas ${registerTotal}. introduce el siguiente numero`);
        registerTotal += parseInt(stateNum)
      }
      else{
        stateNum = prompt('introduce el primer numero');
        registerTotal += parseInt(stateNum)
        bool = false;
      };
      if(parseInt(stateNum) < 0){
        alert(`El total es, ${registerTotal}`)
        break;
      }
    }
  }
  const inpFuntion = ()=>{
    let num = inpEjer_3.value;
    if (parseInt(num) < 0) {
      Resultado.textContent = `El total es ${register}`;
    };
    if(register == NaN){
      register = 0;
    }
    else{
      register += parseInt(num);
      Resultado.textContent = register;
    }
    inpEjer_3.value = '';
  }

  if (btn) {
    btnFunction()
  }
  if(inp){
    inpFuntion()
  }
   
}
btnEnviar.addEventListener('click', ()=>{Ejer_3(false, true); });
inpEjer_3.addEventListener('keyup', (key)=>{if(key.key == "Enter"){Ejer_3(false,true)}});
document.addEventListener('keyup', (key)=>{if(key.key == 'Shift'){Ejer_3(true)}});
