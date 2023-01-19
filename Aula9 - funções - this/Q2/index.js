const button = document.getElementById("btn");

const bDay = document.getElementById("day");
let bMonth = document.getElementById("month");
const bYear = document.getElementById("year");
const gender = document.getElementById("gender");

function getBirthDate(year, month, day){
    const birthD = new Date (year , month , day);
    return birthD;
}
const person = {
    birthDate : "",
    gender : "", 
    daysToDeath : function(){
        const dayNow = new Date();
        const diffMil = dayNow - this.birthDate; 
            
        const diffDay = diffMil / (1000*60*60*24);
            
        if(bDay.value <= 0 || bDay.value > 31) {
            throw "Insira um dia válido!"
        }
        else if(bMonth.value <= 0 || bMonth.value > 12) {
            throw "Insira um mês válido!"
        }
        else if(bYear.value <= 1900 || bYear.value > 2022) {
            throw "Insira um ano válido!"
        }
        else if(bYear.value > 1900 && bYear.value < 1942) {
            throw "Parabéns! Você zerou a vida! O que vier agora é lucro!"
        }

        else if (this.gender == ""){
            throw "Insira um gênero válido!"
        }else if(this.gender == "female"){

            const femCalc = 80.1 * 365;  
            const daysLeftFem = femCalc - diffDay;
            return daysLeftFem;

        }else{
            const maleCalc = 73.1 * 365; 
            const daysLeftMale = maleCalc - diffDay;
            return daysLeftMale;
        }
    }
}



button.addEventListener("click", function(){
    try {
        person.birthDate = getBirthDate(bYear.value, bMonth.value-1, bDay.value);
        person.gender = gender.value;
        document.getElementById("result").innerText = `Você tem: ${person.daysToDeath().toFixed(0)} dias restantes`;
    } catch (error) {
        document.getElementById("result").innerText = error;
    }
});





