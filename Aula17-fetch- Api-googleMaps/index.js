const consultBtn = document.getElementById("consultBtn");
const showMapBtn = document.getElementById("showMapBtn");
const input = document.getElementById("inputCep");
const msg = document.getElementById("msg");
const iframe = document.getElementById("iframe");
const divAddress = document.getElementById("addresses");
let latitude;
let longitude;

consultBtn.addEventListener("click", function(){ 
    try { 
        document.body.style.cursor = "wait";
        consultBtn.style.pointerEvents = "none";
        msg.innerText = "";
        iframe.style.display = "none";
        configVal();
    } catch (error) {
        msg.innerText = error;
    } 
})

showMapBtn.addEventListener("click", function(){
    iframe.src = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=pt&z=14&output=embed`; 
    iframe.style.display = "flex"; 
    showMapBtn.style.display = "none";  
    console.log(iframe.src)
})

function showContent(data){
    for(const field in data){
        if(document.querySelector("#"+field)){
            document.querySelector("#"+field).innerHTML = data[field];
        }
    }
}
function configVal(){
    const inputVal = input.value.replace(/-/g , "");;
    getData(inputVal)
}



function getData(inputValue){
    fetch(`https://cep.awesomeapi.com.br/json/${inputValue}`)
    .then((response) => {    
        if(response.status === 404 || response.status === 400){
            const array = document.querySelectorAll("span");
            for (let index = 0; index < array.length; index++) {
                array[index].innerHTML = "";
                
            }

            throw "Error " + response.status + ", CEP inválido!!";
        }
        else{
            return response.json()
        }
    })
    .then((data) => {
        showContent(data);
        latitude = data.lat;
        longitude= data.lng;

        document.body.style.cursor = "default";
        consultBtn.style.pointerEvents = "auto";
        showMapBtn.style.display = "flex";  
           
    })
    .catch((error) => {
        consultBtn.style.pointerEvents = "auto";
        console.log(error);
        msg.innerText = error;
    });  
}

input.addEventListener("input" , (e)=>{
    try {
        if (isNaN(e.data)){
            input.value.indexOf(e.data);
           
            input.value = input.value.replace(e.data , "");
    
            throw "Digite apenas números!";
        }else{
            msg.innerText = "";
        }
    } catch (error) {
        msg.innerText = error
    }
    
})

input.addEventListener("keydown" , (e)=>{
    try {
        input.maxLength = 9
        if(input.value.length == 9){

            throw "Tamanho máximo atingido!";
        }
    } catch (error) {
        msg.innerText = error;
    }
    
})


input.addEventListener("keyup" , (e)=>{
   
    const number = input.value.replace("-" , "");

    if(number.length > 5){
        input.value = number.slice(0, 5) + "-" + number.slice(5, number.length);
    }
    else{
        input.value = number;
    }
    
})




    




