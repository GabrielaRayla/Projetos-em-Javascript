import CustomEventFunc from "./customEvent.js";

const root = document.getElementById("root");
    
export default function MainPage(){
    const divPage = document.createElement("div");
    const header = document.createElement("header");
    const pTittle = document.createElement("p");
    const divBtn = document.createElement("div");
    const btnBrigadeiro = document.createElement("button");
    const btnCupcake = document.createElement("button");
    const btnDoces = document.createElement("button");
    const footer = document.createElement("footer");
    const pFooter = document.createElement("p");

    divPage.appendChild(header);
    divPage.appendChild(divBtn);
    divPage.appendChild(footer);

    header.appendChild(pTittle);
    divBtn.appendChild(btnBrigadeiro);
    divBtn.appendChild(btnCupcake);
    divBtn.appendChild(btnDoces);

    footer.appendChild(pFooter);

    divPage.id = "mainPage";
    header.className = "headerAllPages";
    pTittle.id = "mainPageDescrip";
    divBtn.className = "allBtns";
    footer.className = "footerAllPages"

    btnBrigadeiro.type = "button";
    btnCupcake.type = "button";
    btnDoces.type = "button";

    btnBrigadeiro.id = "brigadeiro";
    btnCupcake.id = "cupcake";
    btnDoces.id = "doces";

    btnBrigadeiro.innerText = "Brigadeiros";
    btnCupcake.innerText = "Cupcakes";
    btnDoces.innerText = "Doces";

    btnBrigadeiro.addEventListener("click", function(){
        const brigadeirosUrl = CustomEventFunc("/brigadeiros");
        root.dispatchEvent(brigadeirosUrl);
    })
    
    btnCupcake.addEventListener("click", function(){
        const cupcakesUrl = CustomEventFunc("/cupcakes");
        root.dispatchEvent(cupcakesUrl);
    })
    
    btnDoces.addEventListener("click", function(){
        const docesUrl = CustomEventFunc("/doces");
        root.dispatchEvent(docesUrl);
    })

    pTittle.innerText = "Página Principal";
    pFooter.innerText = "Gabriela Rayla";

    return divPage;
    
}
