window.addEventListener('load', init, false);

function init() {

    let iptNombreTxt = document.getElementById("iptNombreTxt");
    let iptApellidoTxt = document.getElementById("iptApellidoTxt");
    let iptEmailTxt = document.getElementById("iptEmailTxt");
    let iptFondoDisponibleTxt = document.getElementById("iptFondoDisponibleTxt");
    let iptMensualidadTxt = document.getElementById("iptMensualidadTxt");
    let btnAdd = document.getElementById("btnAdd");
    let table = document.getElementById("tablaClientes");

    // btnAdd.onclick = agregar;

    let Sony = new Empresa('Sony');
    Sony.registrarClientes(new Cliente('Luis', 'Smith', 'luis@gmail.com', 90, 50));
    Sony.registrarClientes(new Cliente('Marcela', 'Benavides', 'marce@gmail.com', 150, 50));
    Sony.registrarClientes(new Cliente('Ian', 'Smith', 'ian@gmail.com', 80, 40));

    mostrarTablaClientes();

    btnAdd.onclick = function btnAddOnClick() {
        let nombre = iptNombreTxt.value;
        let apellido = iptApellidoTxt.value;
        let email = iptEmailTxt.value;
        let fondoDisponible = Number(iptFondoDisponibleTxt.value);
        let mensualidad = Number(iptMensualidadTxt.value);

        if (nombre !== '' && apellido !== '' && email !== '' && fondoDisponible >= 0 && mensualidad >= 0) {
            let newCliente = new Cliente(nombre, apellido, email, fondoDisponible, mensualidad);
            Sony.registrarClientes(newCliente);
            mostrarTablaClientes();

            Swal.fire({
                position: 'top-center',
                type: 'success',
                title: 'Sus Datos hancido guardados',
                showConfirmButton: false,
                timer: 1500
            })

        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'El campo es requerido!',
                footer: '<a href>Falta algun campo por llenar</a>'
            })
        }

        iptNombreTxt.value = '';
        iptApellidoTxt.value = '';
        iptEmailTxt.value = '';
        iptFondoDisponibleTxt.value = '';
        iptMensualidadTxt.value = '';


    }

    function mostrarTablaClientes() {

        resultadoH3.innerHTML = "Tabla Empresa-Cliente";
        table.innerHTML = '';

        var tr = document.createElement('tr');
        table.appendChild(tr);

        var th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Nombre';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Apellido';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Email';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Fondo Disponibles';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Mensualidad';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Cobrar';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Eliminar';

        for (let y = 0; y < Sony.clientes.length; y++) {


            tr = document.createElement('tr');
            table.appendChild(tr);

            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = Sony.clientes[y].nombre;

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = Sony.clientes[y].apellido;

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = Sony.clientes[y].email;

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = Sony.clientes[y].fondoDisponible;

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = Sony.clientes[y].mensualidad;

            td = document.createElement('td');
            tr.appendChild(td);
            let cobrarBtn = document.createElement('button');
            cobrarBtn.innerHTML = 'Cobrar';
            cobrarBtn.onclick = cobro;
            cobrarBtn.clientesEmail = Sony.clientes[y];
            td.appendChild(cobrarBtn);

            td = document.createElement('td');
            tr.appendChild(td);
            let borrarBtn = document.createElement('button');
            borrarBtn.innerHTML = 'Borrar';
            borrarBtn.onclick = borrar;
            borrarBtn.clientesEmail = Sony.clientes[y];
            td.appendChild(borrarBtn);
        }

    }


    function cobro(event) {
        Sony.cobroCliente(event.target.clientesEmail);
        mostrarTablaClientes();
    }

    function borrar(event) {

        if (Sony.clientes.length === 0) {
            Toast.fire({
                type: 'warning',
                title: 'Empty list',

            });
        } else {
            Swal.fire({
                title: 'Estas seguro que quieres borrar a ' + this.nombre,
                text: "No podrás revertir esto!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, borrarlo!'

            }).then((result) => {
                    if (result.value) {
                        Swal.fire({
                            title: 'Eliminado',
                            text: 'Su archivo ha sido eliminado.',
                            type: 'éxito'

                        })
                    }
                    if (result.value === true) {
                        Sony.removerCliente(event.target.clientesEmail);
                        mostrarTablaClientes();
                    }
                }

            )
        }

    }



};