function menorString() {
    let wordOne = document.querySelector("#wordOne").value;
    let wordTwo = document.querySelector("#wordTwo").value;

    console.log(wordOne); 
    console.log(wordTwo);

    if (wordOne.length > wordTwo.length){
        return("A primeira palavra é maior.");
    }
    else if (wordOne.length  < wordTwo.length){
        return("A segunda palavra é maior"); 
    }
    else{
        return("As duas palavras são iguais");
    }
}

function result(){
    let showresult = document.querySelector("p");

    showresult.innerHTML= menorString();
    console.log(showresult);
}

let button =  document.querySelector("#button");
button.addEventListener("click" , result);