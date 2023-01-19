import { createTable } from "./insertTable.js";
import { getDataIBGE, getDataWeather } from "./getData.js";

const selectState = document.getElementById("selectState");
const selectCity = document.getElementById("selectCity");
const divTable = document.getElementById("tableTest");
const msg = document.getElementById("msg");

function createState(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
    .then((response)=>{
        if( response.status === 200){
            return response.json();
        }else{
            reject("Erro")
        }
    })
    .then((data)=>{
        selectState.innerHTML = `<option>Selecione seu estado</option>`;
        for(let i = 0; i < data.length ; i++){
            selectState.innerHTML += `<option value = ${data[i].sigla}>${data[i].nome}</option>`;
        }
    })
}
createState()

selectState.addEventListener("change", function(){
    const state = selectState.value;

    getDataIBGE (state)
    .then((filteredData)=> {
        selectCity.innerHTML = `<option>Selecione sua cidade</option>`;

        for (let i = 0; i < filteredData.length; i++) {
            selectCity.innerHTML += `<option value= ${filteredData[i].id}>${filteredData[i].nome}</option>`;
        }
    })
    .catch((error) => {
        console.log(error);
        msg.innerText = error;
    })

})

selectCity.addEventListener("change", function(){
    const cityId = selectCity.value;
    
    getDataWeather(cityId)
    .then((filteredData) =>{
        tbody.innerHTML = "";
        for (let i = 0; i < 5; i++) {

            createTable(filteredData[i].date, filteredData[i].weekDays, filteredData[i].icon, filteredData[i].summary, filteredData[i].minTemp + "ºC", filteredData[i].maxTemp + "ºC");

        }
        divTable.style.display = "flex";
    })
    .catch((error) => {
        console.log(error);
        msg.innerText = error;
    })
})




let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let tr = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");
let th6 = document.createElement("th");


table.appendChild(thead);
table.appendChild(tbody);

thead.appendChild(tr);
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
tr.appendChild(th6);
divTable.appendChild(table);

th1.innerHTML = "Data";
th2.innerHTML = "Dia da semana";
th3.innerHTML = "Ícone";
th4.innerHTML = "Resumo";
th5.innerHTML = "Temp. mín.";
th6.innerHTML = "Temp. máx.";