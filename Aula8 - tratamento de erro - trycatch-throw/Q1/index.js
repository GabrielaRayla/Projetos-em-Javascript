
const button = document.getElementById("btn");

button.addEventListener ("click" , (e)=>{
    let inputDay = document.getElementById("day").value;
    let inputMonth = document.getElementById("month").value;
    let inputYear = document.getElementById("year").value;
    let name = document.getElementById("name").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let gender = document.getElementById("gender").value;
    let result = document.getElementById("resultUser");

   

    try {
        let d= new Date(inputYear + "-" + inputMonth + "-" + parseInt(inputDay));
        let date = new Date().getTime() // getting the time in timestamp to compare with the variable "d"
    
        if (name.length < 5 || name == " " ){
            document.getElementById("resultObj").innerHTML = "";
            throw new Error("Field name is invalid!");
    
        }
        else if (d.getTime() > date){
            document.getElementById("resultObj").innerHTML = "";
           throw new Error  ("Field “birthDate” is invalid!");
           
        }
        else if (isNaN(weight) || weight == 0){
            document.getElementById("resultObj").innerHTML = "";
            throw new Error  ("Field “weight” is invalid!");
    
        }
        else if (isNaN(height) || height % 1 != 0 || height == 0){
            document.getElementById("resultObj").innerHTML = "";
            throw new Error ("Field “height” is invalid!");
        
        }
        else if (gender != "female" && gender != "male"){
            document.getElementById("resultObj").innerHTML = "";
            throw new Error ("Field “gender” is invalid!");
    
        }else{
    
            result.innerText = "";

            // converting the weight and height into numbers
            weight= parseFloat(weight);
            height= parseInt(height);

            // setting the date with the right day and month
            const birthDate = d.getTimezoneOffset();
            d.setMinutes(d.getMinutes() + birthDate);
    
            // creating the object
            const user ={
                name : name,
                birthDate: d,
                weight: weight,
                height: height, 
                gender: gender
            }
            

            // showing the label and values on each line
            document.getElementById("resultUser").innerText = `Seus dados: \n Nome: ${user.name} \n Data de nascimento: ${user.birthDate.toLocaleDateString()}\n Peso: ${user.weight}\n Altura: ${user.height}\n Gênero: ${user.gender}\n`, 

            // showing the object as a string on the window
            document.getElementById("resultObj").innerHTML = "Objeto como string: " + JSON.stringify(user);
            
            // showing the object also on the console
            console.log("user", user);
                        
        }
    } catch (error) {
        document.getElementById("resultUser").innerText = error.message;
    }

   
})
