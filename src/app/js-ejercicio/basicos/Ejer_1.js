

const Ejer_1 = (input, span, button,resultado, num_1, num_2)=>{
    input.forEach(inp=> {
        
        inp.addEventListener('keyup', ()=>{
            let className = inp.getAttribute('class');
            if (className.includes('inp_1')) {
                num_1 = inp.value
            } else {
                num_2 = inp.value
            };
            if(parseInt(num_1) > parseInt(num_2)){
                return span.textContent = '>'
            }
            else if(parseInt(num_1) == parseInt(num_2)){
                return span.textContent = '='
            }
            else{
                return span.textContent = '<'
            };
        });
    });
    button.addEventListener('click', ()=>{
        if(parseInt(num_1) > parseInt(num_2)){
            return resultado.textContent = `A). Es mayor que B).. A) tiene ${num_1} y B) tiene ${num_2}`;
        }
        else if(parseInt(num_1) == parseInt(num_2)){
            return resultado.textContent = 'Son Iguales';
        }
        else{
            return resultado.textContent = `B). Es mayor que A).. B) tiene ${num_2} y A) tiene ${num_1}`;
        };
    });
}
module.exports = {
    Ejer_1
}