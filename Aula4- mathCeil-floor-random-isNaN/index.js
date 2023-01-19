function imc(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

        console.log("weight" , weight);
        console.log("height",height);

    if (isNaN(height) || isNaN(weight)){
        console.log("isnan" , isNaN)
        return "Digite um número válido!"
    }

    else{
        weight= parseFloat(weight);
        console.log("weight pós float" ,weight)
        height= parseFloat(height);
        console.log("height pós float" , height)
        
        let imcCalc = weight / (height*height);
        console.log(
            imcCalc
        )
        console.log("imc calc" ,  imcLevels(imcCalc) );

        return imcLevels(imcCalc);  
    }  
}

function imcLevels(imcCalc){
    console.log(imcCalc)
    if (imcCalc < 18.5){
        return "IMC: " + imcCalc.toFixed(1) + "\nSua classificação é: abaixo do peso.";
    }
    else if (imcCalc >= 18.5 && imcCalc <= 24.9){
        return "IMC: " + imcCalc.toFixed(1) + "\nSua classificação é: peso normal."
    }
    else if (imcCalc >= 25 && imcCalc <= 29.9){
        return "IMC: " + imcCalc.toFixed(1) + "\nSua classificação é: sobrepeso."
    }
    else if (imcCalc >= 30){
        return "IMC: " + imcCalc.toFixed(1) + "\nSua classificação é: obesidade."
    }
}

function showResultImc(){
    const resultImc = document.getElementById("imc");
    resultImc.innerText = imc();

    console.log("resultado" , resultImc );
}




// Min and max values functions
function verifyNan(){
    let minValue = document.getElementById("min").value;
    let maxValue = document.getElementById("max").value;

    console.log("minValue" , minValue);
    console.log("maxValue", maxValue);
    
    if (isNaN(minValue) || isNaN(maxValue)){
        console.log("isnan" , isNaN);
        console.log(typeof minValue);
        return "Digite um número válido!"
    }
    else{
        return verifyMin(minValue , maxValue);
    }
}

function verifyMin(minValue , maxValue){
    minValue = parseFloat(minValue);
    console.log("minValue pós float" ,  minValue)
    maxValue = parseFloat(maxValue);
    console.log("maxValue pós float" , maxValue)

    if (minValue >= maxValue){
        return "Erro!! O primeiro número deve ser menor que o segundo!"
    }
    else{
        return betweenMinMax(minValue , maxValue);
    }
}

function betweenMinMax(minValue, maxValue){
    let numberBetween = Math.round(Math.random() * (maxValue - minValue) + minValue);
    Math.random() * (maxValue - minValue) + minValue;
    return "O número entre " + minValue + " e " + maxValue + " é: "+ parseInt (numberBetween).toFixed(2);
}

function showResultMinMax(){
    const resultMinMax = document.getElementById("resultMinMax");
    resultMinMax.innerText = verifyNan();

    console.log("resultadoMinMax" , resultMinMax);
}

// Integer Functions
function verifyNanInt(){
    let decValue = document.getElementById("decimalNumber").value;
    console.log("decValue" , decValue);

    if (isNaN(decValue)){
        console.log("isnan" , isNaN);
        return "Digite um número válido!"
    }
    else{
        decValue = parseFloat(decValue);
        return transformInt(decValue);
    }
}

function transformInt(decValue){
    const minInt = Math.floor(decValue);
    const maxInt = Math.ceil (decValue);

    return "Menor número inteiro: " + minInt + ";\n" + "Maior número inteiro: " + maxInt + "."
}

function showResultInt(){
    const resultInteger = document.getElementById("resultInt");
    resultInteger.innerText = verifyNanInt();


    console.log("resultadoMinMax" , resultInteger);
}


