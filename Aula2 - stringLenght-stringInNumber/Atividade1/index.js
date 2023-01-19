function maiorMenor (){
    let inputOne = document.querySelector("#numberOne").value;
    let inputTwo = document.querySelector("#numberTwo").value;

    inputOne = parseFloat(inputOne);
    inputTwo = parseFloat(inputTwo);

    if (inputOne > inputTwo){
        return("O primeiro número é maior.");
    }
    else if (inputOne  < inputTwo){
        return("O segundo número é maior");
    }
    else{
        return("Os dois números são iguais");
    }

}

function result() {
    let showresult = document.querySelector("p");
    
    showresult.innerHTML = maiorMenor(); 
    console.log(showresult);
}

let button =  document.querySelector("#button");
button.addEventListener("click" , result);

