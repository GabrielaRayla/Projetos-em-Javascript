import routerFunc from "./modules/router.js";

// f - salvar o objeto de rotas retornado numa constante
const router = routerFunc();

const root = document.getElementById("root");

root.addEventListener("onstatechange", function(event){
    const url = event.detail.url;
   
    const page = router.getPage(url);
    root.innerHTML = "";
    root.appendChild(page);
   
    history.pushState("", "", event.detail.url);  
})

root.appendChild(router.getPage("/"));