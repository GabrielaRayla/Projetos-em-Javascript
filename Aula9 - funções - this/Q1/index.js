let number1 = document.getElementById("operand1");
let number2 = document.getElementById("operand2");

const btnSum = document.getElementById("sum");
const btnSubt = document.getElementById("subt");
const btnMult = document.getElementById("mult");
const btnPotent = document.getElementById("potent");
const btnDivis = document.getElementById("divis");

btnSum.addEventListener("click", function(){
    document.getElementById("result").innerText = sum(number1.value, number2.value);
})

btnSubt.addEventListener("click" , function(){
    document.getElementById("result").innerText = subt(number1.value, number2.value);
})
 
btnMult.addEventListener("click" , function(){
    document.getElementById("result").innerText = mult(number1.value, number2.value);
})

btnPotent.addEventListener("click" , function(){
    document.getElementById("result").innerText = potent(number1.value, number2.value);
})

btnDivis.addEventListener("click" , function(){
    document.getElementById("result").innerText = divis(number1.value, number2.value);
})

function aux(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        throw "Insira um valor válido!"
    }
}

function sum (number1 , number2) {
    try {
        aux(number1, number2);
        number1 = Number(number1)
        number2 = Number(number2)
       
        return `Resultado: ${number1 + number2}`;

    } catch (error) {
        return error;   
    }
}

function subt (number1 , number2){
    try {
        aux(number1, number2);
        number1 = Number(number1)
        number2 = Number(number2)
       
        return `Resultado: ${number1 - number2}`;

    } catch (error) {
        return error;
        
    }
}

function mult (number1, number2){
    try {
        aux(number1, number2);
        number1 = Number(number1);
        number2 = Number(number2);

        return `Resultado: ${number1 * number2}`;

    } catch (error) {
        return error; 
    }
}

function potent (number1, number2){
    try{
        aux(number1, number2);
        number1 = Number(number1);
        number2 = Number(number2);

        return `Resultado: ${number1 ** number2}`;

    } catch (error){
        return error;
    }
}

function divis (number1, number2){
    try {
        aux(number1, number2);
        number1 = Number(number1);
        number2 = Number(number2);

        return `Resultado: ${number1 / number2}`;
    } catch (error) {
        return error; 
    }
}



