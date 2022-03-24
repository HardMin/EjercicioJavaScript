 //Ejer_2 Obteniendo datos para encontrar el mayor y el menor o si es igual

const button = document.querySelector('.btnEjer_2');

const Ejer_2 = (num1,num2)=>{
    alert('Introduzca numeros para saber cual es mayor y menor y si son iguales');
    const validacion = (data)=>{
        if (parseInt(data) !== NaN & data == parseInt(data)){
            return true;
        }
    };
    while (true) {
        while (true) {
            num1 = prompt('Primera entrada de datos. Por favor introduzca numeros ')
            if (validacion(num1) ){
                break;
            }
        };
        while(true){
            num2 = prompt('Segunda entrada de datos. Por favor introduzca numeros ')
            if (validacion(num2)) {
                break;
            };
       };
        if (parseInt(num1) - parseInt(num2) > 0)  {
            alert(`La primera entrada de datos es igual a la segunda`);
            break; 
        } else {
          
            if(parseInt(num1) > parseInt(num2)){
                alert(`La primera entrada de datos es mayor a la segunda por ${num1-num2} de diferencia`);
            }
            else{
                alert(`La segunda entrada de datos es mayor a la primera por ${num2-num1} de diferencia`);
            };
            let regreso = prompt('deseas intentar de nuevo? S/N')
            if(regreso == 'S' || regreso == 's'){
                continue;
            }
            else{
                break;
            }
        }
    }
}
button.addEventListener('click', Ejer_2)
module.exports = {
    Ejer_2
}
