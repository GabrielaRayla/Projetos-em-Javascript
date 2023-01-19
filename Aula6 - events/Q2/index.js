let input = document.getElementById("inputCep");
let result = document.getElementById("resultCep");


// making the input accept only numbers
input.addEventListener("input" , (e)=>{

    if (isNaN(e.data)){
        input.value.indexOf(e.data);
       
        input.value = input.value.replace(e.data , "");
        // when the user try to use a letter it is removed

        result.innerHTML = "Digite apenas números!";
    }else{
        result.innerHTML = '';
    }
})

// making the input accept only 9 characters
input.addEventListener("keydown" , (e)=>{

    input.maxLength = 9
    if(input.value.length == 9){

        result.innerHTML = "Tamanho máximo atingido!";
        }
})

// adding the hifen
input.addEventListener("keyup" , (e)=>{

    //creating a variable that prevents any hyphen from being inserted, only number. That was the solution to fix some bugs
    const number = input.value.replace("-" , "");

    // here I created a condition that takes the first 5 numbers, add a hyphen only when I already have 5 numbers, and then allows to insert the last 3 numbers.
    if(number.length > 5){
        input.value = number.slice(0, 5) + "-" + number.slice(5, number.length);
    }
    else{
        input.value = number;
    }
    
})



