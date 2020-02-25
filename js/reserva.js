 /*
         GUÍA 3 
          */
 class Reserva {
     constructor(horario, personas, precio, codigoDeDescuento) {
         this.horario = horario;
         this.personas = personas;
         this.precio = precio;
         this.codigoDeDescuento = codigoDeDescuento;
     }

     //Calculo inicial del valor de la Reserva: multiplicav personas * precio unitario.
     calcularPrecioBase() {
         let precioBase = 0;
         precioBase = this.personas * this.precio;
         return precioBase;
     }

     //Realiza descuento en función a la cantidad de personas asignadas a la Reserva.
     descuentosPorGruposGrandes() {
         let descuentoPorGrupos = 0;

         if (this.personas > 8) {
             descuentoPorGrupos = this.calcularPrecioBase() * 0.15;

         } else if (this.personas >= 7 && this.personas <= 8) {
             descuentoPorGrupos = this.calcularPrecioBase() * 0.10;

         } else if (this.personas >= 4 && this.personas <= 6) {
             descuentoPorGrupos = this.calcularPrecioBase() * 0.05;
         }

         return descuentoPorGrupos;
     }

     //Realiza descuento si la reserva incluye cupón con código de descuento.
     descuentosPorCodigo() {
         let descuentoPorCodigo = 0;

         switch (this.codigoDeDescuento) {
             case "DES15":
                 descuentoPorCodigo = this.calcularPrecioBase() * 0.15;
                 break;
             case "DES200":
                 descuentoPorCodigo = 200;
                 break;
             case "DES1":
                 descuentoPorCodigo = this.precio;
                 break;
             default:
                 descuentoPorCodigo = 0;
                 break;
         }
         return descuentoPorCodigo;
     }

     /*Suma el Total a descontar en la Reserva teniendo en cuenta 
     los descuentos por grupos grandes y por cupones con código de descuento*/
     totalizadorDescuentos() {
         let descuentos = 0;
         descuentos = this.descuentosPorGruposGrandes() + this.descuentosPorCodigo();
         return descuentos;
     }

     //Calcula adicional si el horario reservado corresponde a franja horaria pico.
     adicionalPorHorario() {
         let adicionalHorario = 0;
         let horarioDeReserva = 0;
         horarioDeReserva = this.horario.getHours();
         if ((horarioDeReserva === 13 && horarioDeReserva < 14) || (horarioDeReserva === 20 && horarioDeReserva < 21)) {
             adicionalHorario = this.calcularPrecioBase() * 0.05;
         }
         return adicionalHorario;
     }

     //Calcula adicional si el día elegido es VIE, SAB o DOM (fin de semana).
     adicionalPorFinDeSemana() {
         let adicionalVieSabDom = 0;
         let diaDeReserva;
         if (this.horario.getDay() === 0 || this.horario.getDay() === 5 || this.horario.getDay() === 6) {
             adicionalVieSabDom = this.calcularPrecioBase() * 0.10;
         };
         return adicionalVieSabDom;
     }

     /*Calcula el total de adicionales a sumar a la Reserva teniendo en cuenta
 los adicionales por franja horaria pico y por fin de semana*/
     totalizadorAdicionales() {
         let adicionales = 0;
         adicionales = this.adicionalPorHorario() + this.adicionalPorFinDeSemana();
         return adicionales;
     }

     /*Calcula el precio final a cobrar por la Reserva, descontando en caso de existir
      todos los descuentos y sumando todos los adicionales.*/
     calcularPrecioFinal() {
         let precioFinal = 0;
         precioFinal = this.calcularPrecioBase() + this.totalizadorAdicionales() - this.totalizadorDescuentos();
         return precioFinal;
     }
 }