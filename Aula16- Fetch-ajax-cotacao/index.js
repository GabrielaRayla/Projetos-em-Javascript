const btn = document.getElementById("button");
const select = document.getElementById("select");
const dateStartInput = document.getElementById("dateStart");
const dateEndInput = document.getElementById("dateEnd");
const divTable = document.getElementById("tableTest");
const msg = document.getElementById("msg");
const dateNow = Date.now();


// clicando no botão a tabela fica escondida até que tenha um valor pra mostrar, esvazia o tbody pra substituir os valores sempre, e muda o cursor pra wait, depois faz as validações. Caso passe nas validações ele chama a função de configValues, que no fim chama a função  de pegar os dados, limpa as mensagens da tela 
btn.addEventListener("click", function(){ 
    try { 
        divTable.style.display = "none";
        tbody.innerHTML = "";
        document.body.style.cursor = "wait";
        validations();
        configValues();
        msg.innerText = "";
    } catch (error) {
        msg.innerText = error;
    } 
})

// aqui vai conferir: 1- se a data de início e fim forem maiores que a data de atual, 2- se a data de início é maior que a de fim, 3- se a data inicial ou final estão vazias, e joga um erro caso algumas dessas seja true
function validations(){
    if (dateStartInput.valueAsNumber > dateNow || dateEndInput > dateNow){
        throw "Insira uma data anterior à data atual";
    }
    if(dateStartInput.valueAsNumber > dateEndInput.valueAsNumber){
        throw "A data de início deve ser menor que a data final"
    }
    if(dateStartInput.value == "" || dateEndInput.value == ""){
        throw "Insira a data final e inicial"
    }
}

// aqui vai substituir os hífens da data pra poder usar no link no formato YYYYMMDD, vai pegar o valor do select, calcular a quantidade de dias entre a data inicial e final, e retornar esses valores como parâmetro na função de pegar os dados, chamando a função no processo
function configValues(){
    const dateStartSearch = dateStartInput.value.replace(/-/g , "");
    const dateEndSearch = dateEndInput.value.replace(/-/g , "");
    const selectVal = select.value;
    // pegar os dias entre duas datas, valueAsNumber retorna a data em milisegundos, valueAsDate retorna o valor de string como objeto data
    const diffDays = (dateEndInput.valueAsNumber - dateStartInput.valueAsNumber) / (1000 * 60 *60 * 24);

    return getData(dateStartSearch, dateEndSearch, selectVal, diffDays);
}

// essa função vai fazer uma requisição numa API com os valores da função anterior, 
function getData(dateStartSearch, dateEndSearch, selectVal, diffDays){

    fetch(`https://economia.awesomeapi.com.br/json/daily/${selectVal}/${diffDays}?start_date=${dateStartSearch}&end_date=${dateEndSearch}`)
    .then((response) => {
        return response.json()})//se der certo retorna uma resposta que é convertida em JSON, 
    .then((data) => {
        if (data.length == 0) {
            divTable.style.display = "none"; //a tabela fica escondida até ter algum dado pra mostrar
        }
        else{
            document.body.style.cursor = "pointer"; //se der certo volta o cursor pra pointer
            divTable.style.display = "flex"; //mostra a tabela
            msg.innerText = ""; //tira o texto da tela
            
            // aqui vai criar a data pra cada indíce do array  e multiplicando  o timestamp por 1000 pq o objeto vem em com a data em segundos
            for (let index = 0; index < data.length; index++) {
                const date = new Date(Number(data[index].timestamp * 1000));
                createTable(data, date, index)
            }  
        }
        
    })
    .catch((error) => {
        console.log(error);
        msg.innerText = error;
    });  
}
    
function createTable(data, date, index){
    let tr2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");


    tbody.appendChild(tr2);
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);

    td1.innerHTML = date.toLocaleDateString();
    td2.innerHTML = date.toLocaleTimeString();
    td3.innerHTML = data[index].bid;
    td4.innerHTML = data[index].ask;
    td5.innerHTML = data[index].low;
    td6.innerHTML = data[index].high;

}

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
th2.innerHTML = "Hora";
th3.innerHTML = "Val. compra";
th4.innerHTML = "Val. venda";
th5.innerHTML = "Val. Mínimo";
th6.innerHTML = "Val. Máximo";