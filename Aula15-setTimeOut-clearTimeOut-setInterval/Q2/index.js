const btn = document.getElementById("btn");
const img = document.getElementById("img");
const msg = document.getElementById("msg");

btn.addEventListener("click", setBomb)

function setBomb(){
    btn.style.display = "none";
    img.src = "../assets/bomb.png";
    let count = 60;

    console.log(count);

    const interval = setInterval(function (){
        let audio = new Audio ("../assets/tick.mp3 ");
        audio.play();
        
        --count
        msg.innerText = `Tempo restante ${count}`;
    }, 1000); 

    const timeOut = setTimeout(function(){
        img.src = "../assets/explosion.png";
    
        audio = new Audio ("../assets/explosionSound.mp3 ");
        audio.play();

        clearTimeout(timeOut);
        clearInterval(interval);

        msg.innerText = "";
        btn.style.display = "flex";
    }, 60000);  


    img.addEventListener("click",function() {
        clearTimeout(timeOut);
        clearInterval(interval);
        msg.innerText = "";
        img.src = "../assets/bomb-defused.png"});
        
        btn.style.display = "flex";
}
