
let button = document.getElementById("btn");

button.addEventListener ("click" , (e)=>{
    let inputDay = document.getElementById("day").value;
    let inputMonth = document.getElementById("month").value;
    let inputYear = document.getElementById("year").value;
    let name = document.getElementById("name").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let gender = document.getElementById("gender").value;
    let result = document.getElementById("resultUser");

    // getting the time in timestamp to compare with if

    try {
        let d= new Date(inputYear + "-" + inputMonth + "-" + parseInt(inputDay));
        let date = new Date().getTime()
    
        if (name.length < 5 || name == " " ){
            throw new Error("Field name is invalid!")
    
        }
        else if (d.getTime() > date){
           throw new Error  ("Field “birthDate” is invalid!")
        }
        else if (isNaN(weight) || weight == 0){
            throw new Error  ("Field “weight” is invalid!")
    
        }
        else if (isNaN(height) || height % 1 != 0 || height == 0){
            console.log(isNaN(height))
            console.log(height % 1 == 0)
            console.log(height == 0)
            throw new Error ("Field “height” is invalid!")
        
        }
        else if (gender != "female" && gender != "male"){
            throw new Error ("Field “gender” is invalid!");
    
        }else{
    
            result.innerText = "";

            weight= parseFloat(weight);
            height= parseInt(height);

            const birthDate = d;
            const day = birthDate.getUTCDate();
            console.log(day);
    
            const month = birthDate.getUTCMonth() + 1;
            console.log(month);
    
            const year = birthDate.getUTCFullYear();
            console.log(year);
    
    
            const user ={
                name : name,
                birthDate: new Date (year + "-" + month + "-" + day),
                weight: weight,
                height: height, 
                gender: gender
            }

            document.getElementById("resultUser").innerText = `Nome: ${user.name} \n Data de nascimento: ${user.birthDate}\n Peso: ${user.weight}\n Altura: ${user.height}\n Gênero: ${user.gender}\n`, 


            document.getElementById("resultObj").innerHTML = JSON.stringify(user);
            
            console.log("user", user);
                        
        }
    } catch (error) {
        document.getElementById("resultUser").innerText = error.message;
    }

   
})

// question 2, creating an object, setting an attribute, a value and showing in the console using brackets first, and not using brackets then

const object ={};

object["Um atributo com espaços"]= 1;

let console2= object["Um atributo com espaços"];

console.log (object["Um atributo com espaços"]);
console.log (console2);

