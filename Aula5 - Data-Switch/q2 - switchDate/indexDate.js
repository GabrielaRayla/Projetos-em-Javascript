function showResultDate(){
    const resultDate = document.getElementById ("dateResult");
    resultDate.innerText = dateSplit();

    console.log("date result" , resultDate);
}

function dateSplit(){
    let date = document.getElementById("dateInput").value;

    date = new Date(date);
    console.log(typeof date);

    // let day = date;
    let day = date.getUTCDate();

    let month = date;
    month = month.getUTCMonth()+1;

    let year = date;
    year = year.getFullYear();

    let weekDays = date;
    weekDays = weekDays.getUTCDay();

    let monthText = date;
    monthText = monthText.getUTCMonth();

    let timeStamp = date;
    timeStamp = timeStamp.getTime();


    switch(weekDays){
        case 0:
            weekDays = "Domingo";
            break;
        case 1:
            weekDays = "Segunda-feira";
            break;
        case 2:
            weekDays = "Terça-feira";
            break;
        case 3:
            weekDays = "Quarta-feira";
            break;
        case 4:
            weekDays = "Quinta-feira";
            break;
        case 5:
            weekDays = "Sexta-feira";
            break;
        case 6:
            weekDays = "Sábado";
            break; 
    }

    switch(monthText){
        case 0:
            monthText = "Janeiro";
            break;
        case 1:
            monthText = "Fevereiro";
            break;
        case 2:
            monthText = "Março";
            break;
        case 3:
            monthText = "Abril";
            break;
        case 4:
            monthText = "Maio";
            break;
        case 5:
            monthText = "Junho";
            break;
        case 6:
            monthText = "Julho";
            break; 
        case 7:
            monthText = "Agosto";
            break;
        case 8:
            monthText = "Setembro";
            break;
        case 9:
            monthText = "Outubro";
            break;
        case 10:
            monthText = "Novembro";
            break;
        case 11:
            monthText = "Dezembro";
    }

    return "Dia no formato numérico: " + day + ".\n" + "Mês no formato numérico: " + month + ".\n" +  "Ano no formato numérico: " + year + ".\n" + "Dia da semana: " + weekDays + ".\n" + "Mês em português: " + monthText + ".\n" + "Data em milisegundos: " + timeStamp + ".\n"
}