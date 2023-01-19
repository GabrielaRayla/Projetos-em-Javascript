function showProduct(){
    let product = document.getElementById("chooseProduct").value;

    let productChoosen = document.getElementById("img");

    switch(product){
        case "1":
            productChoosen.setAttribute("src" , "p1.jpg");
            break;
        case "2": 
            productChoosen.setAttribute("src" , "p2.jpg");
            break;
        case "3": 
            productChoosen.setAttribute("src" , "p3.jpg");
            break;
        case "4": 
            productChoosen.setAttribute("src" , "p4.jpg");
            break;
        case "5": 
            productChoosen.setAttribute("src" , "p5.jpg");
            break;
        case "6": 
            productChoosen.setAttribute("src" , "p6.jpg");
            break;
        default: 
            productChoosen = "Escolha uma opção válida";        
    }
}

const btn = document.getElementById("button");
btn.addEventListener("click" , showProduct);