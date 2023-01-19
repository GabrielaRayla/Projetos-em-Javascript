function calc(){
    let x = document.getElementById("operand1").value;
    let y = document.getElementById("operand2").value;
    const operator = document.getElementById("operator").value;
    let result;

    x = parseFloat(x);
    y= parseFloat(y);

    if (operator == "addition"){
        result = x + y;
    }
    else if (operator == "subtraction"){
        result = x - y ;
    }
    else if (operator == "multiplication"){
        result = x * y ;
    }
    else if (operator == "division"){
        result = x / y;
    }

    return result.toFixed(2);
}

function showresult(){
    const showresult = document.querySelector("p");

    showresult.innerHTML = "O resultado é: "+calc();
    console.log(showresult);
}

const button = document.getElementById("button");
button.onclick= showresult;
