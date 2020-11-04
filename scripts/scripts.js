let cuerpoweb = document.body;
let foco = cuerpoweb.querySelector("#cambiarTema i");
let label = cuerpoweb.querySelector("#cambiarTema label");
let modocolor = localStorage.getItem("modo");
let fotocancha = cuerpoweb.querySelectorAll(".foto-cancha");
let misreservas = cuerpoweb.querySelectorAll(".mis-reservas");
let fondoform = cuerpoweb.querySelector(".fondo-formulario");
let subsectionhome = cuerpoweb.querySelector("#subsection-home p");
let h3 = cuerpoweb.querySelectorAll(".foto-cancha h3");


function cargarModo() {
    if (modocolor === "oscuro") {
        cuerpoweb.classList.add("oscuro");
        foco.classList.remove("fas");
        foco.classList.add("far");
        label.classList.add("oscuro2");
        fotocancha.forEach(div => {
            div.classList.add("div-oscuro");
        });
        misreservas.forEach(div => {
            div.classList.add("div-oscuro");
        });
        if (fondoform != null) {
            fondoform.classList.add("div-oscuro");
        }
        if (subsectionhome != null) {
            subsectionhome.classList.add("oscuro2");
        }
        h3.forEach(titulo => {
            titulo.classList.add("div-oscuro");
        });
    }else{
        cuerpoweb.classList.remove("oscuro");
        foco.classList.remove("far");
        foco.classList.add("fas");
        label.classList.remove("oscuro2");
        fotocancha.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        misreservas.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        if (fondoform != null) {
            fondoform.classList.remove("div-oscuro");    
        }
        if (subsectionhome != null) {
            subsectionhome.classList.remove("oscuro2");
        }
        h3.forEach(titulo => {
            titulo.classList.remove("div-oscuro");
        });
    }
    cambiaTema.cambiarTema(modocolor);
}

cambiaTema = new Vue({
    el: "#tema",
    data: {
        tema: "",
    },
    methods: {
        cambiarTema: function (modocolor){
            if (modocolor === "oscuro") {
                this.tema = "claro";
            } else {
                this.tema = "oscuro";
            }
    }}
});

function cambiarModo() {
    if (modocolor === "oscuro") {
        localStorage.setItem("modo","claro");
        modocolor = "claro";
        cuerpoweb.classList.remove("oscuro");
        foco.classList.remove("far");
        foco.classList.add("fas");
        label.classList.remove("oscuro2");
        fotocancha.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        misreservas.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        if (fondoform != null) {
            fondoform.classList.remove("div-oscuro");  
        }
        if (subsectionhome != null) {
            subsectionhome.classList.remove("oscuro2");
        }
        h3.forEach(titulo => {
            titulo.classList.remove("div-oscuro");
        });
    } else {
        localStorage.setItem("modo","oscuro");
        modocolor = "oscuro";
        cuerpoweb.classList.add("oscuro");
        foco.classList.remove("fas");
        foco.classList.add("far");
        label.classList.add("oscuro2");
        fotocancha.forEach(div => {
            div.classList.add("div-oscuro");
        });
        misreservas.forEach(div => {
            div.classList.add("div-oscuro");
        });
        if (fondoform != null) {
            fondoform.classList.add("div-oscuro");
        }
        if (subsectionhome != null) {
            subsectionhome.classList.add("oscuro2");
        }
        h3.forEach(titulo => {
            titulo.classList.add("div-oscuro");
        });
    }
    cambiaTema.cambiarTema(modocolor);

}




