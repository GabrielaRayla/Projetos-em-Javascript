const shuffleBtn = document.getElementById("shuffleBtn");
const drawBtn = document.getElementById("drawBtn");
const message = document.getElementById("msg");
const arrayCards = [];
let img1 = document.getElementById("card1");
let img2 = document.getElementById("card2");
let img3 = document.getElementById("card3");
let img4 = document.getElementById("card4");
let img5 = document.getElementById("card5");

shuffleBtn.addEventListener("click", shuffleCards);
drawBtn.addEventListener("click", drawCards);

function createCards(){
    for (let indexCreate = 1; indexCreate <= 13; indexCreate++){
        for (let indexSuit = 0; indexSuit <= 3; indexSuit++){
            const cards = {name: "", value: "", suit: ""};
            if (indexCreate == 1){
                cards.name= "A";
                cards.value= 1;
            }else if (indexCreate == 11){
                cards.name= "J";
                cards.value= 11;
            }else if (indexCreate == 12){
                cards.name= "Q";
                cards.value= 12;
            }else if (indexCreate == 13){
                cards.name= "K";
                cards.value= 13;
            }else{
                cards.name= String(indexCreate); //criando o nome das cartas de número como string 
                cards.value= indexCreate;
            } 
            switch (indexSuit) {
                case 0:
                    cards.suit= "C";
                    break;
                case 1: 
                    cards.suit= "D";
                    break;
                case 2: 
                    cards.suit= "H";
                    break;
                case 3: 
                    cards.suit= "S";
                    break;
                default:
                    break;
            }  
            arrayCards.push(cards); //após cada criação do naipe ele envia pro array    
        }
    }
}

//deixa as cartas viradas pra baixo quando embaralha, preenche novamente o array de cartas caso todas já tenham sido tiradas, 
function shuffleCards(){
    img1.src = `deck/card-back.jpg`;
    img2.src = `deck/card-back.jpg`;
    img3.src = `deck/card-back.jpg`;
    img4.src = `deck/card-back.jpg`;
    img5.src = `deck/card-back.jpg`;

    message.innerText = "Embaralhado!";    
    if(arrayCards.length == 0){
        createCards();
    } 
    //o índice é igual ao array -1, pois o length é 54, se fizer só array.length vai dar erro pois n existe 54 números; vai diminuindo -1 no índice cada vez que percorre
    for (let allCardsIndex = arrayCards.length - 1; allCardsIndex > 0; allCardsIndex--) {
        const oneCardIndex = Math.floor(Math.random() * (allCardsIndex + 1)); //gera um número aleatório e arredonda

        [arrayCards[allCardsIndex], arrayCards[oneCardIndex]] = [arrayCards[oneCardIndex], arrayCards[allCardsIndex]];  
        //substitui a última carta do array pelo número aleatório gerado
    }
}

createCards();

//aqui a partir do indíce 0 até o 5 , copiando as 5 primeiras cartas ´slice - índice tal até tal' e cria um novo array, retira elas do baralho com o splice 'índice, número de elementos'
function drawCards(){
    try {
        if (arrayCards.length == 0){
            message.innerText = "Suas cartas acabaram! Embaralhe de novo para poder jogar novamente!";    
        }else{
            const fiveCards = arrayCards.slice(0, 5);
            arrayCards.splice(0, 5);
            orderCards(fiveCards);
            showCards(fiveCards);
        } 
    } catch (error) {
        console.log(error)
    }
}

function orderCards(fiveCards){
    fiveCards.sort(function(a,b) {
        if(a.value < b.value) return -1;
        if(a.value > b.value) return 1;
        return 0;
    });
    pokerHandsClassif(fiveCards);
    
}

function pokerHandsClassif(fiveCards){
    //straigth flush 
    if (
        fiveCards[0].value+1 == fiveCards[1].value &&
        fiveCards[1].value+1 == fiveCards[2].value && 
        fiveCards[2].value+1 == fiveCards[3].value &&
        fiveCards[3].value+1 == fiveCards[4].value
    ){
        if ( 
            fiveCards[0].suit == fiveCards[1].suit && 
            fiveCards[1].suit == fiveCards[2].suit && 
            fiveCards[2].suit == fiveCards[3].suit && 
            fiveCards[3].suit == fiveCards[4].suit
        ){
            message.innerText = "Parabéns! Você tem um straight flush!";
        }else{
            message.innerText = "Parabéns! Você tem uma sequência!";
        }   
        // royal flush 
    }else if ( 
        fiveCards[0].value == 1 &&
        fiveCards[1].value == 10 && 
        fiveCards[2].value == 11 && 
        fiveCards[3].value == 12 &&
        fiveCards[4].value == 13
    ){   
        if (
        fiveCards[0].suit == fiveCards[1].suit &&
        fiveCards[1].suit == fiveCards[2].suit && 
        fiveCards[2].suit == fiveCards[3].suit && 
        fiveCards[3].suit == fiveCards[4].suit
    ){
            message.innerText = "Parabéns! Você tem um royal flush";
        }else{
            message.innerText = "Parabéns! Você tem uma sequência!";
        }
        // quadra
    }else if (
        (fiveCards[0].value == fiveCards[1].value &&
        fiveCards[1].value == fiveCards[2].value && 
        fiveCards[2].value == fiveCards[3].value) || 
        (fiveCards[1].value == fiveCards[2].value && 
        fiveCards[2].value == fiveCards[3].value && 
        fiveCards[3].value  == fiveCards[4].value)
    ){
        message.innerText = "Você tem uma quadra!";
        // full house
    }else if(
        (fiveCards[0].value == fiveCards[1].value &&
        fiveCards[1].value == fiveCards[2].value &&  
        fiveCards[3].value == fiveCards[4].value) || 
        (fiveCards[0].value == fiveCards[1].value && 
        fiveCards[2].value == fiveCards[3].value && 
        fiveCards[3].value == fiveCards[4].value)
    ){
        message.innerText = "Você tem um full house!";
        // trinca
    }else if(
        (fiveCards[0].value == fiveCards[1].value &&
        fiveCards[1].value == fiveCards[2].value) ||
        (fiveCards[1].value == fiveCards[2].value &&
        fiveCards[2].value == fiveCards[3].value) || 
        (fiveCards[2].value == fiveCards[3].value && 
        fiveCards[3].value == fiveCards[4].value)
    ){
        message.innerText = "Você tem uma trinca!";
    }
        // dois pares
    else if(
        (fiveCards[0].value == fiveCards[1].value &&
        fiveCards[2].value == fiveCards[3].value) ||
        (fiveCards[0].value == fiveCards[1].value &&
        fiveCards[3].value == fiveCards[4].value) ||
        (fiveCards[1].value == fiveCards[2].value &&
        fiveCards[3].value == fiveCards[4].value)
    ){
        message.innerText = "Você tem dois pares!";
    } 
        // um par
    else if(
        (fiveCards[0].value == fiveCards[1].value) ||
        (fiveCards[1].value == fiveCards[2].value) ||
        (fiveCards[2].value == fiveCards[3].value) ||
        (fiveCards[3].value == fiveCards[4].value)
    ){
        message.innerText = "Você tem um par!";
        // flush
    }else if (
        fiveCards[0].suit == fiveCards[1].suit &&
        fiveCards[1].suit == fiveCards[2].suit && 
        fiveCards[2].suit == fiveCards[3].suit && 
        fiveCards[3].suit == fiveCards[4].suit
    ){
        message.innerText = "Você tem um flush!";
    }    
        // nada
    else{
        message.innerText = "Você não tem nada!";
    }
}

function showCards(fiveCards){
    img1.src = `deck/${fiveCards[0].name}${fiveCards[0].suit}.svg`;
    img2.src = `deck/${fiveCards[1].name}${fiveCards[1].suit}.svg`;
    img3.src = `deck/${fiveCards[2].name}${fiveCards[2].suit}.svg`;
    img4.src = `deck/${fiveCards[3].name}${fiveCards[3].suit}.svg`;
    img5.src = `deck/${fiveCards[4].name}${fiveCards[4].suit}.svg`;
}