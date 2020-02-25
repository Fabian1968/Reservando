/*
GUÍA 1 - PASOS 1, 2, 3, 4, 5, 6.
GUÍA 3 - Tests del objeto Reserva.
*/

let expect = chai.expect;

describe("Reservando", () => {

    describe("Métodos de la Clase Restaurante", () => {

        it("fn reservarHorario(horario): Debería eliminar el horario reservado del arreglo del restaurante elegido.", () => {
            let restaurantPrueba = new Restaurant(1996, "Say No More", "Parrilla", "Bahía Blanca", ["12:00", "12:30", "13:00"], "../img/asiatica1.jpg", [8, 9, 10, 10, 9]);
            restaurantPrueba.reservarHorario("12:30");
            expect(restaurantPrueba.horarios).to.eql(["12:00", "13:00"]);
        })

        it("fn reservarHorario(horario): Debería mantener igual el arreglo, si el horario elegido no corresponde a ese restaurante.", () => {
            let restaurantPrueba = new Restaurant(1994, "La Sal No Sala", "Pizzería", "Bahía Blanca", ["20:00", "20:30", "21:00"], "../img/asiatica1.jpg", [8, 9, 10, 10, 9]);
            restaurantPrueba.reservarHorario("11:11");
            expect(restaurantPrueba.horarios).to.eql(["20:00", "20:30", "21:00"]);
        })

        it("fn reservarHorario(horario): Debería mantener igual el arreglo, si la fn no recibe un horario por parámetro.", () => {
            let restaurantPrueba = new Restaurant(2017, "Random", "Pastas", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", [8, 9, 10, 10, 9]);
            restaurantPrueba.reservarHorario();
            expect(restaurantPrueba.horarios).to.eql(["12:15", "12:30", "12:45"]);
        })

        it("fn obtenerPuntuación(): Debería calcular correctamente el promedio, de acuerdo a las puntuaciones obrenidas.", () => {
            let restaurantPrueba = new Restaurant(1982, "Yendo de la Cama al Living", "FoodTrack", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", [10, 8, 7, 10, 5]);
            let fn = restaurantPrueba.obtenerPuntuacion();
            expect(fn).to.equal(8);
        })

        it("fn obtenerPuntuación(): La puntuación debería ser 0 si el restaurante no ha sido calificado.", () => {
            let restaurantPrueba = new Restaurant(2020, "Lo que vendrá", "Vegetariano", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", []);
            expect(restaurantPrueba.obtenerPuntuacion()).to.equal(0);
        })

        it("fn calificar(nuevaCalificación): Debería mantener igual el arreglo de calificaciones si la puntuación es menor a 1.", () => {
            let restaurantPrueba = new Restaurant(2020, "Lo que vendrá", "Vegetariano", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", [5, 6]);
            restaurantPrueba.calificar(0);
            expect(restaurantPrueba.calificaciones).to.eql([5, 6]);
        })

        it("fn calificar(nuevaCalificación): Debería mantener igual el arreglo de calificaciones si la puntuación es mayor a 10.", () => {
            let restaurantPrueba = new Restaurant(2020, "Lo que vendrá", "Vegetariano", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", [5, 6]);
            restaurantPrueba.calificar(11);
            expect(restaurantPrueba.calificaciones).to.eql([5, 6]);
        })

        it("fn calificar(nuevaCalificación): Debería mantener igual el arreglo de calificaciones si la puntuación no es un número.", () => {
            let restaurantPrueba = new Restaurant(2020, "Lo que vendrá", "Vegetariano", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", [8, 9]);
            restaurantPrueba.calificar("ok");
            expect(restaurantPrueba.calificaciones).to.eql([8, 9]);
        })

        it("fn calificar(nuevaCalificación): Debería agregar al array de calificaciones la nueva calificación recibida, si es correcta.", () => {
            let restaurantPrueba = new Restaurant(2020, "Lo que vendrá", "Vegetariano", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", [8, 9]);
            restaurantPrueba.calificar(10);
            expect(restaurantPrueba.calificaciones).to.eql([8, 9, 10]);
        })

        it("fn sumarCalificaciones(puntuaciones): Debería sumar los valores de un arreglo que se pasa por parámetro.", () => {
            let restaurantPrueba = new Restaurant(2020, "Lo que vendrá", "Vegetariano", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", [10, 10, 10, 9]);
            let puntuaciones = restaurantPrueba.calificaciones;
            expect(restaurantPrueba.sumarCalificaciones(puntuaciones)).to.equal(39);
        })

        it("fn calcularPromedio(): Debería calcular el promedio de todas las calificaciones de un Restaurant.", () => {
            let restaurantPrueba = new Restaurant(2020, "Lo que vendrá", "Vegetariano", "Bahía Blanca", ["12:15", "12:30", "12:45"], "../img/asiatica1.jpg", [1, 2, 3, 6]);
            expect(restaurantPrueba.calcularPromedioCalificaciones()).to.equal(3);
        })


    })

    describe("Métodos de la Clase Listado", () => {

        it("fn buscarRestaurante(id): Debería arrojar un 'Object' si el id pasado por párametro EXISTE en el arreglo de Listado de Restaurantes.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
            ];
            let listado = new Listado(listadoDeRestaurantes);
            expect(listado.buscarRestaurante(1)).to.be.an("Object");
        })

        it("fn buscarRestaurante(id): Debería arrojar el resultado: 'No se ha encontrado ningún restaurant',si el id pasado por párametro NO existe en el arreglo de Listado de Restaurantes.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
            ];
            let listado = new Listado(listadoDeRestaurantes);
            expect(listado.buscarRestaurante(4)).to.equal("No se ha encontrado ningún restaurant");
        })

        it("fn obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario): Debería arrojar un objeto vacío porque no se pasa ninguno de los 3 parámetros a la fn.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes();
            expect(fn).to.length(0);
        })

        it("fn obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario): Debería arrojar un objeto vacío porque se pasa sólo un parámetro a la fn.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes("Asiática");
            expect(fn).to.length(0);
        })

        it("fn obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario): Debería arrojar un objeto vacío porque se pasan sólo 2 parámetros a la fn.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes("Nueva York", "13:00");
            expect(fn).to.length(0);
        })

        it("fn obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario): Debería arrojar un objeto con 3 restaurantes que 'en este caso' cumplen con los 3 parámetros que pide la fn.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Londres", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["13:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Asiática", "Londres", ["13:00", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                new Restaurant(3, "Burgermeister", "Asiática", "Londres", ["11:00", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes("Asiática", "Londres", "13:00");
            expect(fn).to.length(3);
        })

        it("Ubicaciones repetidas", () => {
            let arreglo = ["Caballito", "Caballito", "Barrio Norte", "Barrio Norte"]
            let sinRepetidos = listado.eliminarRepetidosEnUnArreglo(arreglo);
            expect(sinRepetidos).to.length(2);

        })
    })

    describe("Métodos de la clase Reserva", () => {
        it("fn calcularPrecioBase: Debería calcular el Precio Base de la Reserva multiplicando cantidad de personas por precio por persona.", () => {
            let reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 5, 300, "DES1");

            expect(reserva1.calcularPrecioBase()).to.equal(1500);
        })

        it("fn descuentos: Debería calcular los descuentos teniendo en cuenta grupo y código de descuento.", () => {
            let reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 5, 300, "DES1");
            expect(reserva1.totalizadorDescuentos()).to.equal(375);
        })

        it("fn descuentos: Debería calcular los adicionales considerando día domingo y horario pico.", () => {
            let reserva1 = new Reserva(new Date(2019, 7, 18, 13, 30), 2, 300, "");
            expect(reserva1.totalizadorAdicionales()).to.equal(90);
        })


        it("fn descuentos: Debería calcular precio final considerando descuentos y adicionales.", () => {
            let reserva1 = new Reserva(new Date(2019, 7, 17, 20, 00), 9, 100, "DES1");
            expect(reserva1.calcularPrecioFinal()).to.equal(800);
        })

        it("fn descuentos: Debería calcular precio final sin descuentos, ni adicionales.", () => {
            let reserva1 = new Reserva(new Date(2019, 7, 20, 23, 00), 2, 100, "CODIGO INEXISTENTE");
            expect(reserva1.calcularPrecioFinal()).to.equal(200);
        })

    })
})