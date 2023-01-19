import CustomEventFunc from "./customEvent.js";
 //export default function Doces(){
//     const root = document.getElementById("root");
//     root.innerHTML = docesStrutc;

//     document.getElementById("btnMainPage").addEventListener("click", function(){
//         // MainPage();
//         const mainPageUrl = CustomEventFunc("/");
//         root.dispatchEvent(mainPageUrl);
//     })
//     return docesStrutc;
// }

const root = document.getElementById("root");
    
export default function Doces(){
    const divPage = document.createElement("div");
    const header = document.createElement("header");
    const pTittle = document.createElement("p");
    const divBtn = document.createElement("div");
    const button = document.createElement("button");
    const footer = document.createElement("footer");
    const pFooter = document.createElement("p");

    divPage.appendChild(header);
    divPage.appendChild(divBtn);
    divPage.appendChild(footer);

    header.appendChild(pTittle);
    divBtn.appendChild(button);

    footer.appendChild(pFooter);

    divPage.id = "docesPage";
    header.className = "headerAllPages";
    pTittle.id = "docesDescrip";
    divBtn.className = "allBtns";
    footer.className = "footerAllPages"

    button.type = "button";
    button.id = "btnMainPage";
    button.innerText = "Home";
    button.addEventListener("click", function(){
        const mainPageUrl = CustomEventFunc("/");
        root.dispatchEvent(mainPageUrl);
    })

    pTittle.innerText = "Página de doces";
    pFooter.innerText = "Gabriela Rayla";

    return divPage;
}
