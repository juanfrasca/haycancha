new Vue({
    el: "#form-reserva",
    data: {
        calificacion: 1,
        estrellas: [{
            calificacion: 1
        }, {
            calificacion: 2
        }, {
            calificacion: 3
        }, {
            calificacion: 4
        }, {
            calificacion: 5
        }]
    },
    computed: {
        mostrarMinimaPuntuacion: function () {
            var _this = this;
            return this.estrellas.filter(function (estrella) {
                return estrella.calificacion <= _this.calificacion;
            })
        }
}})