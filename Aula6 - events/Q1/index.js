let select = document.getElementById("chooseCar");
let result = document.getElementById("result");

select.addEventListener("change", (e)=>{
    console.log(e);
   
let carImg = document.getElementById("divImg");


    switch (e.target.value){
        case "1":
           result.innerText = carDescrip("Aventador LP700-4 Roadster", "Lamborghini",  "350km/h" , "3 seg" , "4.700.000,00") ;
           carImg.innerHTML = '<img src="./car1.jpg" alt="Carro  esportivo na cor laranja">';
           break;
        case "2":
            result.innerText = carDescrip("911 Turbo S Cabriolet" , "Porsche" , "330 km/h" , "2.8 seg" ,  "1.559.000");
            carImg.innerHTML = '<img src="./car2.jpg" alt="Carro  esportivo na cor cinza">';
            break;
        case "3":
            result.innerText = carDescrip("California T" , "Ferrari" , "315 km/h" , "3.6 seg" , "1.860.000,00");
            carImg.innerHTML = '<img src="./car3.jpg" alt="Carro  esportivo na cor vermelha">';
            break;
        case "4":
            result.innerText = carDescrip("Huracán LP 610" , "Lamborghini" , "325 km/h", "3.2 seg ", "2.600.000,00");
            carImg.innerHTML = '<img src="./car4.jpg" alt="Carro  esportivo na cor preta">';
            break;
        case "5":
            result.innerText = carDescrip("Vanquish V12" , "Aston Martin" , "295 km/h", "4.1 seg",  "2.650.000,00");
            carImg.innerHTML = '<img src="./car5.jpg" alt="Carro  esportivo na cor verde">';
            break;
        case "6":
            result.innerText = carDescrip("FF" , "Ferrari" , "335 km/h", "3.7 seg", "3.950.000,00");
            carImg.innerHTML = '<img src="./car6.jpg" alt="Carro  esportivo na cor preta">';
            break;

    }
})
// description function that is a template string
function carDescrip(name, brand, speed, acceleration, price, ){
    return `${name} \n Fabricante: ${brand} \n Vel. máxima: ${speed}\n Aceleração: ${acceleration}\n R$: ${price}`
}
