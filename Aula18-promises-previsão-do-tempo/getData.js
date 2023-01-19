import { filterDataIBGE, filterDataWeather } from "./filterData.js";

export function getDataWeather(cityId){
    return new Promise((resolve, reject) => {
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${cityId}`)        
        .then((response) => {
            if( response.status === 200){
                return response.json();
            }else{
                reject("Erro")
            }
        })
        .then((data) =>{
            const filteredData = filterDataWeather(data, cityId);
            resolve(filteredData);
        })
    })
}
export function getDataIBGE(state){
    return new Promise((resolve, reject) =>{
        fetch (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
        .then((response) => {
            if(response.status === 200){
                return response.json();
            }else{
                reject("Erro");
            }  
        })
        .then((data)=> {
            const filteredData = filterDataIBGE(data);
            resolve(filteredData);
        })
    })
}