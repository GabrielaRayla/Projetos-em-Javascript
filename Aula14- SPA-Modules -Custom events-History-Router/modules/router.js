import MainPage from "./mainPage.js";
import Brigadeiros from "./brigadeiros.js";
import Cupcake from "./cupcake.js";
import Doces from "./doces.js";


export default function routerFunc(){
    const router = {
        "/": MainPage,   
        "/brigadeiros" : Brigadeiros,
        "/cupcakes" : Cupcake,
        "/doces": Doces,

    
        getPage: function(url){
            switch(url){
                case "/":
                     return router["/"](); 
                case "/brigadeiros":
                    console.log(router["/brigadeiros"]);
                    return router["/brigadeiros"]();
                case "/cupcakes":
                    return router["/cupcakes"]();
                case "/doces":
                    return router["/doces"]();        
            };
        }   
    }
    return router;
}