let cuerpoweb = document.body;
let foco = cuerpoweb.querySelector("#cambiarTema i");
let label = cuerpoweb.querySelector("#cambiarTema label");
let modocolor = localStorage.getItem("modo");
let fotocancha = cuerpoweb.querySelectorAll(".foto-cancha");
let modal = cuerpoweb.querySelectorAll(".modal-content");
let misreservas = cuerpoweb.querySelectorAll(".mis-reservas");
let fondoform = cuerpoweb.querySelector(".fondo-formulario");
let titulohome = cuerpoweb.querySelector("#titulo");
let subsectionhome = cuerpoweb.querySelector("#subsection-home p");
let h3 = cuerpoweb.querySelectorAll(".foto-cancha h3");


function cargarModo() {
    if (modocolor === "oscuro") {
        cuerpoweb.classList.add("oscuro");
        if (foco != null) {
            foco.classList.remove("fas");
            foco.classList.add("far");
            label.classList.add("oscuro");
        }
        fotocancha.forEach(div => {
            div.classList.add("div-oscuro");
        });
        modal.forEach(div => {
            div.classList.add("div-oscuro");
        });
        misreservas.forEach(div => {
            div.classList.add("div-oscuro");
        });
        if (fondoform != null) {
            fondoform.classList.add("div-oscuro");
        }
        if (titulohome != null) {
            titulohome.classList.add("div-oscuro");
        }
        if (subsectionhome != null) {
            subsectionhome.classList.add("oscuro");
        }
        h3.forEach(titulo => {
            titulo.classList.add("div-oscuro");
        });
    }else{
        cuerpoweb.classList.remove("oscuro");
        if (foco != null) {
            foco.classList.remove("far");
            foco.classList.add("fas");
            label.classList.remove("oscuro");
        }
        fotocancha.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        modal.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        misreservas.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        if (fondoform != null) {
            fondoform.classList.remove("div-oscuro");    
        }
        if (titulohome != null) {
            titulohome.classList.remove("div-oscuro");
        }
        if (subsectionhome != null) {
            subsectionhome.classList.remove("oscuro");
        }
        h3.forEach(titulo => {
            titulo.classList.remove("div-oscuro");
        });
    }
    if (foco != null) {
        cambiaTema.cambiarTema(modocolor);
    }
}

const cambiaTema = new Vue({
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
        label.classList.remove("oscuro");
        fotocancha.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        modal.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        misreservas.forEach(div => {
            div.classList.remove("div-oscuro");
        });
        if (fondoform != null) {
            fondoform.classList.remove("div-oscuro");  
        }
        if (titulohome != null) {
            titulohome.classList.remove("div-oscuro");
        }
        if (subsectionhome != null) {
            subsectionhome.classList.remove("oscuro");
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
        label.classList.add("oscuro");
        fotocancha.forEach(div => {
            div.classList.add("div-oscuro");
        });
        modal.forEach(div => {
            div.classList.add("div-oscuro");
        });
        misreservas.forEach(div => {
            div.classList.add("div-oscuro");
        });
        if (fondoform != null) {
            fondoform.classList.add("div-oscuro");
        }
        if (titulohome != null) {
            titulohome.classList.add("div-oscuro");
        }
        if (subsectionhome != null) {
            subsectionhome.classList.add("oscuro");
        }
        h3.forEach(titulo => {
            titulo.classList.add("div-oscuro");
        });
    }
    cambiaTema.cambiarTema(modocolor);

}




