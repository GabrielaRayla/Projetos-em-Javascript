const btn = document.getElementById("btn");
const selectMin = document.getElementById("selectMin");
const selectSec = document.getElementById("selectSec");
const minutesShow = document.getElementById("minutes");
const secondsShow = document.getElementById("seconds");
const div = document.querySelector(".bombSec");
let interval = "";
let inputMin ;
let inputSec;


fillSelects()
function fillSelects(){
    for (let index = 0; index < 60; index++) {
        if(index < 10){
            selectMin.innerHTML += `<option value= 0${index}>0${index}</option>`;

            selectSec.innerHTML += `<option value= 0${index}>0${index}</option>`;
        }else{
            selectMin.innerHTML += `<option value= ${index}>${index}</option>`;

            selectSec.innerHTML += `<option value= ${index}>${index}</option>`;
        }
    }
}


btn.addEventListener("click", function(){
    let audio = new Audio ("../assets/tick.mp3 ");


    if (btn.innerText == "Definir alarme"){
        btn.innerText = "Desarmar alarme";
        div.style.border = "none";
        inputMin = parseInt(selectMin.value);
        inputSec= parseInt(selectSec.value);
    
        interval = setInterval(function(){ 
            
            audio.play();
            if(inputMin != 00 && inputSec < 00){
                inputMin = inputMin-1;
                inputSec= 59;
            }
            if(inputMin < 10){
                minutesShow.innerText = `0${inputMin}`;
            }else{
                minutesShow.innerText = inputMin;
            }
            if(inputSec < 10){
                secondsShow.innerText = `0${inputSec}`;
            }else{
                secondsShow.innerText = inputSec;
            }
            if(inputMin== 00 && inputSec == 00){
                audio = new Audio ("../assets/alarme.mp3 ");
                audio.play(); 

                btn.innerText = "Definir alarme";
                clearInterval(interval);
            }
            const totalTime = parseInt(selectMin.value)*60 + parseInt(selectSec.value);

            const timeNow = inputMin *60 + inputSec

            console.log(totalTime  * 0.05);
           
            if (timeNow <= totalTime  * 0.05){
                div.style.border = "10px solid darkred";
            }
        
            inputSec--;
            
            
    
        }, 1000);
        
    }else{
        audio.pause();
        clearInterval(interval);
        minutesShow.innerText = "00";
        secondsShow.innerText = "00";
        btn.innerText = "Definir alarme"
    }
})



