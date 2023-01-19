const button = document.getElementById("btn");

button.addEventListener ("click" , (e)=>{

    try {
        const text = document.getElementById("textarea").value;
        const parse = JSON.parse(text);
        document.getElementById("resultUser").innerText = "Parsable JSON string!";
        console.log(parse);    
    } catch (error) {   
        document.getElementById("resultUser").innerText = "O texto não pode ser convertido, veja o erro: \n" + error;
    }
    
});