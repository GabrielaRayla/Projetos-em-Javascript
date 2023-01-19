export function filterDataWeather(data, cityId){
    const arrayWeather = [];
    const dateNow = Date.now();
    
    for (let i = 0; i < 5; i++) {
        const obj = {};

        const newDate = new Date(dateNow + (1000 * 60 * 60 * 24 * i)).toLocaleDateString();

        if (i >= 2){
            obj.date = newDate;
            obj.weekDays = data[cityId][`${newDate}`]["dia_semana"];
            obj.icon = data[cityId][`${newDate}`]["icone"];
            obj.summary = data[cityId][`${newDate}`]["resumo"];
            obj.minTemp = data[cityId][`${newDate}`]["temp_min"];
            obj.maxTemp = data[cityId][`${newDate}`]["temp_max"];

        }else{
            obj.date = newDate;
            obj.weekDays = data[cityId][`${newDate}`]["manha"]["dia_semana"];
            obj.icon = data[cityId][`${newDate}`]["manha"]["icone"];
            obj.summary = data[cityId][`${newDate}`]["manha"]["resumo"];
            obj.minTemp = data[cityId][`${newDate}`]["manha"]["temp_min"];
            obj.maxTemp = data[cityId][`${newDate}`]["manha"]["temp_max"];
        }
        arrayWeather.push(obj)
    }
    return arrayWeather;    
}

export function filterDataIBGE(data){
    const arrayIBGE = [];

    for (let i = 0; i < data.length; i++) {
        const obj = {} ;
        obj.id = data[i].id;
        obj.nome = data[i].nome;

        arrayIBGE.push(obj);
    }
    return arrayIBGE;
}