const btn = document.getElementById("btn");
const img = document.getElementById("img");
const msg = document.getElementById("msg");

btn.addEventListener("click", function(){
    img.src = "../assets/bomb.png";
    msg.innerText = "Vai explodir hein!"

    img.addEventListener("click", function(){
        clearTimeout(timeOut);

        img.src = "../assets/bomb-defused.png"
        
        msg.innerText = "Bomba desarmada!"
    })

    const timeOut = setTimeout(function(){
        img.src = "../assets/explosion.png";

        const audio = new Audio ("../assets/explosionSound.mp3 ");

        audio.play();
    }, 10000);
})

