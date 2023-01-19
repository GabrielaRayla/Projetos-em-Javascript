const elements = document.querySelectorAll(".elemento");
const message = document.getElementById("msg");
const resetBtn = document.getElementById("btn");
let count = 1;
let jogoDaVelha = [[1, 1, 1],[1, 1, 1],[1, 1, 1]];
let winnerExists = false;

// here the forEach has this "element" that will cycle "percorrer" through all its elements and add an eventListener for each element
elements.forEach((element) => element.addEventListener ("click", function(event){
    // console.log(event.target);
    const elemento = event.target;
    const row = parseInt(elemento.dataset.row);
    const column = parseInt(elemento.dataset.column);

    if (jogoDaVelha[row][column] == 1 && winnerExists == false){
        writeLetter(row, column, elemento);
        verifyWinner();
    }
    count++;
}))

function writeLetter(row, column, elemento){
    if(count % 2 == 1){
        jogoDaVelha[row][column] = "X";
        
        elemento.innerHTML = "X";
        message.innerText = "Vez da bolinha"
    }else{
        jogoDaVelha[row][column] = "O";

        elemento.innerHTML = "O";
        message.innerText= "Vez do X";
    }
} 

function verifyWinner(){
    if (count == 9){
        message.innerText = "Deu velha";
    }
    for (let index = 0; index < 3; index++) {
        if (jogoDaVelha[index][0] == jogoDaVelha [index][1] &&
            jogoDaVelha [index][1] == jogoDaVelha[index][2] &&
            jogoDaVelha[index][0] != 1){
            winner();
            winnerExists = true;
        }
    }
    for (let indexColumn = 0; indexColumn < 3; indexColumn++){
        if(jogoDaVelha[0][indexColumn] == jogoDaVelha[1][indexColumn] &&
            jogoDaVelha[1][indexColumn] == jogoDaVelha[2][indexColumn] &&
            jogoDaVelha[0][indexColumn] != 1){
            winner();
            winnerExists = true;
        } 
    }
    if(jogoDaVelha[0][0] == jogoDaVelha[1][1] && jogoDaVelha[1][1]== jogoDaVelha[2][2] && jogoDaVelha[0][0] != 1){
        winner();
        winnerExists = true;
    }
    if(jogoDaVelha[0][2] == jogoDaVelha[1][1] && jogoDaVelha[1][1] == jogoDaVelha[2][0] && jogoDaVelha[0][2] != 1){
        winner();
        winnerExists = true;
    }
    
}//&& winnerExists == false

function winner(){
    if(count % 2 == 1){
       message.innerText = "X ganhou!";
    }else{
        message.innerText= "Bolinha ganhou!";
    }
}

resetBtn.addEventListener("click", function(){
    count = 1;
    jogoDaVelha = [[1, 1, 1],[1, 1, 1],[1, 1, 1]];
    winnerExists = false;

    elements.forEach((element) => {
        element.innerHTML = ""
    })
})

