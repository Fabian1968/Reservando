class Restaurant {
    constructor(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
        this.id = id;
        this.nombre = nombre;
        this.rubro = rubro;
        this.ubicacion = ubicacion;
        this.horarios = horarios;
        this.imagen = imagen;
        this.calificaciones = calificaciones;
    }

    /*GUÍA 2 - PASO 1.
    Se  Refactoriza la función reservarHorario(horario) 
    utilizando la función filter
    */
    reservarHorario(horarioReservado) {
        const horariosFiltrados = this.horarios.filter(horario => horario !== horarioReservado);
        return this.horarios = horariosFiltrados;
    }

    calificar(nuevaCalificacion) {
        if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion <= 10) {
            this.calificaciones.push(nuevaCalificacion);
        }
    }

    sumarCalificaciones(numeros) {
        var sumatoria = 0;
        sumatoria = numeros.reduce(function(a, b) {
            return a + b;
        });
        return sumatoria;
    }

    calcularPromedioCalificaciones() {
        let promedio = this.sumarCalificaciones(this.calificaciones) / this.calificaciones.length;
        return Math.round(promedio * 10) / 10;
    }

    obtenerPuntuacion() {
        if (this.calificaciones.length === 0) {
            return 0;
        } else {
            return this.calcularPromedioCalificaciones();
        }
    }
}