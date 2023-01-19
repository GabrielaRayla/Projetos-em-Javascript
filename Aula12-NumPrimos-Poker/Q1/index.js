const button = document.getElementById("button");
const message = document.getElementById("msg");
const array = [];
button.addEventListener("click", pushArray);


function numberPrime(num){
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }  
    return num;
}

function pushArray() {
    let number = 0;
    while (number <= 100000){
        const result = numberPrime(number);
        if (result != false && result != 1){
            array.push(result);
            console.log(array);
        }
        number++;
    }
    message.innerText = `Entre 0 e 100.000 há ${array.length} números primos`;
}

