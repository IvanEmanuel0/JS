let nombre, edad, email, ocupacion, error = [], especificacion, enviar;

nombre = $('#txtNombre');
edad = $('#txtEdad');
email = $('#txtEmail');
ocupacion = $('#sltOcupacion');
especificacion = $('#especificacion');
enviar = $('#btn-enviar');


function validarNombre(nombre) {
    if (nombre.val() == "" || nombre.val() == null) {
        nombre.parent().append('<div class="alert alert-danger">El nombre no puede ser vacio.</div>');
        sacarAlerta();
    }
}

function validarEmail(email) {
    let valEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    if (!valEmail.test(email.val())) {
        email.parent().append('<div class="alert alert-danger">Tenes ingresar un dirección de email válida.</div > ');
        sacarAlerta();
    }
}

function validarEdad(edad) {
    if (edad.val() < 18) {
        edad.parent().append('<div class="alert alert-danger">Tenes que ser mayor de edad.</div > ');
    }
}

function seleccionarOcupacion(ocupacion) {
    if (ocupacion.val() == 1) {
        borrarMenu();
        desplegarMenuEmpleado();
    } else {
        borrarMenu();
        desplegarMenuEstudiante();
    }
}

ocupacion.change(function () {
    seleccionarOcupacion(ocupacion);
})

enviar.click(function() {
    validarNombre(nombre);
    validarEmail(email);
    validarEdad(edad);
    return false;
})

function borrarMenu() {
    $('#menuEspecificacion').remove();
}

function sacarAlerta() {
    setTimeout(function () {
        $('.alert').css('display', 'none');
    }, 2000);
}

function desplegarMenuEmpleado() {
    especificacion.append(`     <div id="menuEspecificacion" class="form-group">
                                    <label for="especificar">Tipo de empleo:</label>
                                    <select name="" id="especificar" class="form-control">
                                        <option selected disabled value="">-Seleccionar-</option>
                                        <option value="1">Monotributista</option>
                                        <option value="2">Relacion de dependencia</option>
                                        <option value="3">Informal</option>
                                    </select>
                                </div>`);
}

function desplegarMenuEstudiante() {
    especificacion.append(`     <div id="menuEspecificacion" class="form-group">   
                                    <label for="especificar">Nivel de estudio:</label>
                                    <select name="" id="especificar" class="form-control">
                                        <option selected disabled value="">-Seleccionar-</option>
                                        <option value="1">Secundario</option>
                                        <option value="2">Terciario</option>
                                        <option value="3">Universitario</option>
                                    </select>
                                </div>`)
}



/*function validarNombre(nombre) {
    if (nombre == "" || nombre == null) {
        error.push("Nombre no puede ser un campo vacio");
        return false;
    }
    return true;
}

function validarEmail(email) {
    let valEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    if (valEmail.test(email)) {
        return true;
    }
    error.push("Debe ingresar un email valido");
    return false;
}   

function validarEdad(edad) {
    if (edad < 18) {
        error.push("Debe ser mayor de edad");
        return false;
    }
    return true;
}

function desplegarMenuEmpleado() {
    especificacion.innerHTML = `<label for="especificar">Tipo de empleo:
                                    <select name="" id="especificar">
                                        <option selected disabled value="">-Seleccionar-</option>
                                        <option value="1">Monotributista</option>
                                        <option value="2">Relacion de dependencia</option>
                                        <option value="3">Informal</option>
                                    </select>
                                </label>`;
}

function desplegarMenuEstudiante() {
    especificacion.innerHTML = `<label for="especificar">Nivel de estudio:
                                    <select name="" id="especificar">
                                        <option selected disabled value="">-Seleccionar-</option>
                                        <option value="1">Secundario</option>
                                        <option value="2">Terciario</option>
                                        <option value="3">Universitario</option>
                                    </select>
                                </label>`;
}
    



enviar.onclick = function () {
    validarNombre(nombre.value);
    validarEdad(edad.value);
    validarEmail(email.value);
    mensaje.innerText = error.join('. ')
    return false;
}*/