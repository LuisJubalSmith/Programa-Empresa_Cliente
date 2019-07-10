class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.clientes = [];
    }

    registrarClientes(cliente) {

        for (let index = 0; index < this.clientes.length; index++) {
            if (cliente.email === this.clientes[index].email) {
                alert(cliente.nombre + ' ' + cliente.apellido + 'Ya existe!');
                return;
            }
        }
        this.clientes.push(cliente);

        console.log(this.clientes);
    }


    removerCliente(cliente) {

        for (let j = 0; j < this.clientes.length; j++) {
            if (cliente.email === this.clientes[j].email) {
                this.clientes.splice(j, 1);
                return;
            }
        }

    }

    cobroCliente(cliente) {
        for (let x = 0; x < this.clientes.length; x++) {
            if (cliente.email === this.clientes[x].email) {
                this.clientes[x].pagar();
                return;
            }
        }
    }
}