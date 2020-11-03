const cancha = document.body.querySelectorAll(".foto-cancha");

console.log("Canchas disponibles cargadas: "+ cancha.length);
let contador = [];
contador.length = cancha.length;
contador.fill(0);

for (let i = 0; i < cancha.length; i++){
    cancha[i].addEventListener("click", function() {
        contador[i] = ++contador[i];
        console.log("Clicks en " + cancha[i].getElementsByTagName("H3")[0].innerHTML + ": " + contador[i]);
    });
}

const titulo = document.body.querySelector("h1");
titulo.addEventListener("dblclick",function () {
    for (let i = 0; i < cancha.length; i++) {
        console.log("Clicks en " + cancha[i].getElementsByTagName("H3")[0].innerHTML + ": " + contador[i]);
    }    
})

