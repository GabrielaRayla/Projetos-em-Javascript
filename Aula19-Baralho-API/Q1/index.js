let img1 = document.getElementById("card1");
let img2 = document.getElementById("card2");
let img3 = document.getElementById("card3");
let img4 = document.getElementById("card4");
let img5 = document.getElementById("card5");

async function shuffle(){
    const response = await fetch (`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);

    if(response.status !== 200){
        return Promise.reject("Erro ao fazer a requisição");
    }
    else{
        const data = await response.json();
        return data.deck_id; 
    }
}

async function drawCards(dataID){
    const array = [];
    for (let i = 0; i < 5; i++) {

        const response = await fetch (`https://deckofcardsapi.com/api/deck/${dataID}/draw/?count=1`);

        if(response.status !== 200){
            return Promise.reject("Erro");
        }
        else{
            const data = await response.json();
            array.push(data.cards[0]);
        }
    }
    showCards(array);
}

async function aux(){
    try {
        const dataID = await shuffle();
        await drawCards(dataID);
    } catch (error) {
        console.log(error);
    }
}

function showCards(array){
    img1.src = array[0].image;
    img2.src = array[1].image;
    img3.src = array[2].image;
    img4.src = array[3].image;
    img5.src = array[4].image;
}

aux();
