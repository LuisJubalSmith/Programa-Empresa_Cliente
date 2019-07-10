class Cliente {
    constructor(nombre, apellido, email, fondoDisponible, mensualidad) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.fondoDisponible = fondoDisponible;
        this.mensualidad = mensualidad;
        this.fondosSuficientes = false;
        this.verificacionDeFondosSuficientes();

    }

    pagar() {

        if (this.fondoDisponible >= this.mensualidad) {

            this.fondoDisponible -= this.mensualidad;
            this.verificacionDeFondosSuficientes();
        }
    }

    verificacionDeFondosSuficientes() {

        if (this.fondoDisponible !== 0 && this.fondoDisponible >= this.mensualidad) {
            this.fondosSuficientes = true;
        } else {
            this.fondosSuficientes = false;
        }
    }
}