function showResultNumber(){
    const resultText = document.getElementById("text");
    resultText.innerText = numberInText();

    console.log("resultadoText" , resultText);
}

function numberInText(){
    let numberText = document.getElementById("number").value;

    numberText = parseInt(numberText); 

    let textPhrase;

    switch(numberText){
        case 0:
            textPhrase = "Zero";
            break;
        case 1:
            textPhrase = "Um";
            break;
        case 2: 
            textPhrase = "Dois";
            break;
        case 3: 
            textPhrase = "Três";
            break;
        case 4: 
            textPhrase = "Quatro"
            break;
        case 5:
            textPhrase = "Cinco";
            break;
        case 6:
            textPhrase = "Seis";
            break;
        case 7: 
            textPhrase = "Sete";
            break;
        case 8: 
            textPhrase = "Oito";
            break;
        case 9: 
            textPhrase = "Nove"
            break;
        case 10: 
            textPhrase = "Dez"
            break;  
        default:
            textPhrase = "Digite um número entre 0 e 10!";   
    }
    return textPhrase;
}

