const prodName = document.getElementById("name");
const prodDesc = document.getElementById("desc");
const prodVal = document.getElementById("val");

const btnAddProd = document.getElementById("btnAddProd");
const btnListProd = document.getElementById("btnListProd");
const products = [];
const message = document.getElementById("result");
const date = new Date();
date.setHours(date.getHours() -3);
const dateFormat = date.toISOString();
const showDet = document.getElementById("showDetails");
const tableResult = document.getElementById("tableResult");


let id = 1;

btnAddProd.addEventListener("click", function(){
    try {
        if(btnAddProd.innerHTML == "Atualizar item"){
            let index = 0
            // sending the value back to the array, after editing and changing the button to "Adicionar produto"
            while (index < products.length){
                if (products[index].id == id){
                    products[index].name = prodName.value;
                    products[index].description = prodDesc.value;
                    products[index].value = prodVal.value;

                    prodName.value = "";
                    prodDesc.value = "";
                    prodVal.value = "";
                }
                index++;
            }
            listProd();
            btnAddProd.innerHTML = "Adicionar produto"
            // input validations
        } else{
            if (prodName.value == "" || prodDesc.value == ""){
                throw `Falha no cadastro do produto!\n Você precisa preencher o nome e a descrição do produto!`
            }
            if (isNaN(prodVal.value) || prodVal.value == ""){
                throw `Falha no cadastro do produto!\n Você precisa digitar um número válido!`
            }
            // creating the object and then pushing into the array
            if(prodName.value != "" && prodDesc.value != "" && prodVal.value != ""){
                const product = {
                    id: id++,
                    name: prodName.value,
                    description: prodDesc.value,
                    value: prodVal.value,
                    incluidoEm: dateFormat,
                }
                products.push(product);
                message.innerText= `Produto ${product.name} incluído
                com sucesso!`;

                // this will clear the input field after adding the product
                prodName.value = "";
                prodDesc.value = "";
                prodVal.value = "";
            }
        }   
    } catch (error) {
        message.innerText= error;
    }
})

btnListProd.addEventListener("click" , listProd);

// creating the table and its elements
let test = document.getElementById("tableTest");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let tr = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");

// the next line will insert the thead element inside the table
table.appendChild(thead);
table.appendChild(tbody);

thead.appendChild(tr);
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
test.appendChild(table)

th1.innerHTML = "ID";
th2.innerHTML = "Produto";
th3.innerHTML = "Valor";
th4.innerHTML = "Editar";
th5.innerHTML = "Apagar";

// this function will show the table visibility after clicking the button listproducts,  and check, if the array length is 1 (which means there is a product inserted) it will insert the rows e columns; the index++ will look at the entire array and stop; if there is no product inserted the will not work
function listProd(){
    try {
        if (products.length == 0){
            throw `Insira seu produto primeiro!`
        }
        tableResult.style.display = "flex";
        tbody.innerHTML = "";
        let index = 0;
        while (index < products.length){
            creatLine(index);
            console.log(index);
            index++; 
        }
    } catch (error) {
        message.innerText = error;
    }
    
}

function creatLine(index){
    let tr2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const imgEditButton = document.createElement("img");
    const imgDelButton = document.createElement("img");

    editButton.setAttribute("id", "editBtn");
    editButton.setAttribute("onclick", `editFunc(${index})`);
    deleteButton.setAttribute("id", "deleteBtn");
    deleteButton.onclick= delProd;
    deleteButton.setAttribute("onclick", `delProd(${index})`);
    imgEditButton.setAttribute("src", "edit.png");
    imgDelButton.setAttribute("src", "delete.png");
    

    editButton.appendChild(imgEditButton);
    deleteButton.appendChild(imgDelButton);

    tbody.appendChild(tr2);
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);

    td1.innerHTML = products[index].id;
    td2.innerHTML = products[index].name;
    td3.innerHTML = products[index].value;
    td4.innerHTML = editButton.outerHTML;
    td5.innerHTML = deleteButton.outerHTML;
    td2.setAttribute("onclick", `showDetails(${index})`);
    // this td2 is the name field, when clicked it will call the function showDetails
}

// this function will insert the product description when the name is clicked;
function showDetails(index){
    showDet.innerText = `ID: ${products[index].id}\n Nome: ${products[index].name}\n Descrição: ${products[index].description}\n Valor: ${products[index].value}\n Incluído em: ${products[index].incluidoEm}`;
    
}

// this function will first take the array elements and put into the "cadastre o seu produto" field, change the button "adicionar produto" to "atualizar item" and clear the message that shows below the buttons
function editFunc(index){
    prodName.value = products[index].name;
    prodDesc.value = products[index].description;
    prodVal.value = products[index].value;

    id = products[index].id;
    btnAddProd.innerHTML = "Atualizar item";
    message.innerText= "";
}

// this one will verify if the product is being edited, if it is the case, it will only delete after the edition, then will delete. If there is no product in the table it will remove the table with display-none
function delProd(index){
    try {
        if(btnAddProd.innerHTML == "Atualizar item"){
            throw "Finalize a alteração primeiro!"
        }
        products.splice(index, 1);
        listProd();
        message.innerText= "Produto excluído!";
        if (products.length == 0){
            tableResult.style.display = "none";
            message.innerText= "";
        }
        
    } catch (error) {
        message.innerText = error;
    }

}




