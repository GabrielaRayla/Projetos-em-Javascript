const msg = document.getElementById("msg");
const container = document.getElementById("cards");
const startBtn = document.getElementById("start");
const drawnArray = [];

//instanciando uma classe já criada que vai ser um objeto
const card1 = new raffle();
const card2 = new raffle();
const card3 = new raffle();
let cardQuantity = 1;

//cada cardNumbers recebe um array diferente
const cardNumbers1 = card1.listNum();
const cardNumbers2 = card2.listNum();
const cardNumbers3 = card3.listNum();

// aqui chama a função de criar cartas passando o array específico pra poder inserir os números na tabela
createCard(cardNumbers1, card1);
createCard(cardNumbers2, card2);
createCard(cardNumbers3, card3);

createResult();

function createCard(cardNumbers, card){                          
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td0 = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");
    const td9 = document.createElement("td");

    container.appendChild(table)
    table.appendChild(tbody);
    tbody.appendChild(tr);
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);

    tr.setAttribute("id", `${"card" + cardQuantity}`);
    td0.setAttribute("id", `${"card" + cardQuantity}Num0`);
    td1.setAttribute("id", `${"card" + cardQuantity}Num1`);
    td2.setAttribute("id", `${"card" + cardQuantity}Num2`);
    td3.setAttribute("id", `${"card" + cardQuantity}Num3`);
    td4.setAttribute("id", `${"card" + cardQuantity}Num4`);
    td5.setAttribute("id", `${"card" + cardQuantity}Num5`);
    td6.setAttribute("id", `${"card" + cardQuantity}Num6`);
    td7.setAttribute("id", `${"card" + cardQuantity}Num7`);
    td8.setAttribute("id", `${"card" + cardQuantity}Num8`);
    td9.setAttribute("id", `${"card" + cardQuantity}Num9`);

    td0.innerHTML = `${cardNumbers[0]}`;
    td1.innerHTML = `${cardNumbers[1]}`;
    td2.innerHTML = `${cardNumbers[2]}`;
    td3.innerHTML = `${cardNumbers[3]}`;
    td4.innerHTML = `${cardNumbers[4]}`;
    td5.innerHTML = `${cardNumbers[5]}`;
    td6.innerHTML = `${cardNumbers[6]}`;
    td7.innerHTML = `${cardNumbers[7]}`;
    td8.innerHTML = `${cardNumbers[8]}`;
    td9.innerHTML = `${cardNumbers[9]}`;

    btEvent(cardNumbers, card);
}

// adicionando os eventos aos elementos de cada array
function btEvent(cardNumbers, card) {
    for (let i = 0; i < cardNumbers.length; i++) {
        const tagTd = document.getElementById(`card${cardQuantity}Num${i}`);
        tagTd.addEventListener("click", (event) => {
            card.markNum(event);
        });
    }
    cardQuantity++
}

// função que cria as cartelas com outras funções que: lista os números do array, permite marcar o número caso ele seja sorteado e caso esteja tudo marcado ele manda a mensagem de quem ganhou 
function raffle(){
    const array = [];
    // 
    for(let i = 0; array.length < 10 ; i++){
        const num =  Math.round(Math.random() * (75 - 1) + 1);
        if(!array.includes(num)){
            array.push(num)
        }
    }

    function listNum(){
       return array; 
    }

    //pega o valor do elemento com base no evento que foi clicado e verifica se esse valor está incluso no array de números sorteados
    function markNum(event){
        let value = Number(event.target.innerHTML);
        if(drawnArray.includes(value)){
            event.target.style.textDecoration = "line-through"; 
            event.target.style.backgroundColor = "rgb(228, 55, 90)"; 
            event.target.style.color = "white"; 

            //verifica se dentro do array de cada cartela tem o valor que foi clicado, se tiver, retira o valor do array até esvaziar
            if(array.includes(value)){
                array.splice(array.indexOf(value), 1);
            }verifyMarked();
        }else{
            msg.innerText = "Esse número não foi sorteado ainda!"
        }
        
    }

    //verifica se o array de cada cartela está vazio, se estiver ele lança mensagem de quem ganhou
    function verifyMarked(){
        if(cardNumbers1.length == 0){
            msg.innerText = "Jogador 1 ganhou!";
        }else if(cardNumbers2.length == 0){
            msg.innerText = "Jogador 2 ganhou!";
        }else if(cardNumbers3.length == 0){
            msg.innerText = "Jogador 3 ganhou!";
        }     
    } //retorna as funções como objeto
    return {listNum, markNum, verifyMarked}
}

//função do sorteador
function drawer(min, max){
    const drawerArr = [];
    
    //cria um array de 0 a 75 para sortear
    for (let i = min;  drawerArr.length < max; i++) {
        drawerArr.push(i);
    }
    //embaralha o array
    function sort(){
        drawerArr.sort(()=>{
            return Math.random() - 0.5;
        })
    }

    const interval = setInterval(function verifyRaffle(){
        const drawnNum = drawerArr[0]; 
        drawnArray.push(drawnNum); //coloca o número sorteado da vez no array
        drawerArr.splice(0, 1); //remove o primeiro do array
        showResult(drawnNum); 
        msg.innerHTML = `Número sorteado: ${drawnNum}`; 
        
        if(drawerArr.length == 0 || cardNumbers1.length == 0 || cardNumbers2.length == 0 || cardNumbers3.length == 0){
            clearInterval(interval)
            msg.innerHTML = "O sorteio acabou!"
        }
    }, 5000)
    return{sort, interval}
}
 
startBtn.addEventListener("click", (e) =>{
    const drawer2 = drawer(1, 75);
    drawer2.sort()
});

//cria várias tags 'p' de 1 a 75 para mostrar os números sorteados
function createResult(){
    const result = document.getElementById("result");
    for (let i = 1;  i <= 75; i++) {
        result.innerHTML += `<p class="results">${i}</p>`
    }    
}

//verifica qual número da nodelist é o sorteado e dá um destaque à ele 
function showResult(drawnNum){
    const nodeList = document.querySelectorAll(".results");
    
    for (let i = 0;  i < 75; i++) {
        if(nodeList[i].innerHTML == drawnNum){
            nodeList[i].style.border = "2px solid white"
            nodeList[i].style.borderRadius = "30%"
            nodeList[i].style.color = "white"
        }
    }
}


