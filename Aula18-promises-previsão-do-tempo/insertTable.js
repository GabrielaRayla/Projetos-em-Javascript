export function createTable(newDate, weekDays, icon, summary, minTemp, maxTemp){
    const tbody = document.querySelector('tbody')
    let tr2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let img = document.createElement("img");


    tbody.appendChild(tr2);
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);

    td3.appendChild(img);

    img.setAttribute("src", icon);
    td1.innerHTML = newDate;
    td2.innerHTML = weekDays;
    td4.innerHTML = summary;
    td5.innerHTML = minTemp;
    td6.innerHTML = maxTemp;
}