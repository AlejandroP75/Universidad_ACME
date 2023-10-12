let espacio = document.getElementById("espacio");

let cursos = [];
let estudiantes = [];

class curso {
    constructor(codigo, nombre, especialidad, duracion, creditos){
        this.codigo = codigo;
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.duracion = duracion;
        this.creditos = creditos;
    }
    eliminarCurso(){

    }
    modificarCurso(){

    }
}

class estudiante {
    constructor(codigo, nombre, carrera){
        this.codigo = codigo;
        this.nombre = nombre;
        this.carrera = carrera;
    }
    eliminarEstudiante(){

    }
    modificarEstudiante(){

    }
}

function crearCurso(){
    while(espacio.firstChild){
        espacio.removeChild(espacio.firstChild);
    }

    let labelCodigo = document.createElement("label");
    let inputCodigo = document.createElement("input");
    inputCodigo.setAttribute("type", "number");
    inputCodigo.setAttribute("id", "inputCodigo");
    let labelNombre = document.createElement("label");
    let inputNombre = document.createElement("input");
    inputNombre.setAttribute("id", "inputNombre");
    let labelEspecialidad = document.createElement("label");
    let inputEspecialidad = document.createElement("input");
    inputEspecialidad.setAttribute("id", "inputEspecialidad");
    let labelDuracion = document.createElement("label");
    let inputDuracion = document.createElement("input");
    inputDuracion.setAttribute("id", "inputDuracion");
    inputDuracion.setAttribute("type", "number");
    let labelCreditos = document.createElement("label");
    let inputCreditos = document.createElement("input");
    inputCreditos.setAttribute("id", "inputCreditos");
    inputCreditos.setAttribute("type", "number");
    let boton = document.createElement("button");
    boton.setAttribute("onclick", "pushCurso()");
    let contenedor = document.createElement("div");
    let titulo = document.createElement("h1");
    
    titulo.textContent = "Creación curso";
    labelCodigo.textContent = "Ingrese el codigo:";
    labelNombre.textContent = "Ingrese el nombre:";
    labelEspecialidad.textContent = "Ingrese la especialidad:";
    labelDuracion.textContent = "Ingrese la duración en horas:";
    labelCreditos.textContent = "Ingrese el numero de creditos: ";
    boton.textContent = "Crear curso";

    contenedor.appendChild(titulo);
    contenedor.appendChild(labelCodigo);
    contenedor.appendChild(inputCodigo);
    contenedor.appendChild(labelNombre);
    contenedor.appendChild(inputNombre);
    contenedor.appendChild(labelEspecialidad);
    contenedor.appendChild(inputEspecialidad);
    contenedor.appendChild(labelDuracion);
    contenedor.appendChild(inputDuracion);
    contenedor.appendChild(labelCreditos);
    contenedor.appendChild(inputCreditos);
    contenedor.appendChild(boton);
    espacio.appendChild(contenedor);
}

function pushCurso(){
    let inputCodigo = document.getElementById("inputCodigo");
    let inputNombre = document.getElementById("inputNombre");
    let inputEspecialidad = document.getElementById("inputEspecialidad");
    let inputDuracion = document.getElementById("inputDuracion");
    let inputCreditos = document.getElementById("inputCreditos");

    nueCurso = new curso(inputCodigo.value, inputNombre.value, inputEspecialidad.value, inputDuracion.value, inputCreditos.value);
    cursos.push(nueCurso);
    alert("Curso creado exitosamente");
}

function crearEstudiante(){
    while(espacio.firstChild){
        espacio.removeChild(espacio.firstChild);
    }
    let labelCodigo = document.createElement("label");
    let inputCodigo = document.createElement("input");
    inputCodigo.setAttribute("type", "number");
    inputCodigo.setAttribute("id", "inputCodigoEst");
    let labelNombre = document.createElement("label");
    let inputNombre = document.createElement("input");
    inputNombre.setAttribute("id", "inputNombreEst");
    let labelCarrera = document.createElement("label");
    let inputCarrera = document.createElement("input");
    inputCarrera.setAttribute("id", "inputCarrera");
    let boton = document.createElement("button");
    boton.setAttribute("onclick", "pushEstudiante()");
    let contenedor = document.createElement("div");
    let titulo = document.createElement("h1");
    
    titulo.textContent = "Creación estudiante";
    labelCodigo.textContent = "Ingrese el codigo:";
    labelNombre.textContent = "Ingrese el nombre:";
    labelCarrera.textContent = "Ingrese la carrera:";
    boton.textContent = "Crear estudiante";

    contenedor.appendChild(titulo);
    contenedor.appendChild(labelCodigo);
    contenedor.appendChild(inputCodigo);
    contenedor.appendChild(labelNombre);
    contenedor.appendChild(inputNombre);
    contenedor.appendChild(labelCarrera);
    contenedor.appendChild(inputCarrera);
    contenedor.appendChild(boton);
    espacio.appendChild(contenedor);
}

function pushEstudiante(){
    let inputCodigo = document.getElementById("inputCodigoEst");
    let inputNombre = document.getElementById("inputNombreEst");
    let inputCarrera = document.getElementById("inputCarrera");

    nueEst = new estudiante(inputCodigo.value, inputNombre.value, inputCarrera.value);
    estudiantes.push(nueEst);
    alert("Estudiante creado exitosamente");
}

function inscribirEstudiante(){
    while(espacio.firstChild){
        espacio.removeChild(espacio.firstChild);
    }

    let contenedor = document.createElement("div");
    let titulo = document.createElement("h1");
    let labelEst = document.createElement("label");
    let listaEst = document.createElement("select");
    let labelCur = document.createElement("label");
    let listaCur = document.createElement("select");
    let labelDias = document.createElement("label");
    let dias = document.createElement("select");
    let lunes = document.createElement("option");
    let martes = document.createElement("option");
    let miercoles = document.createElement("option");
    let jueves = document.createElement("option");
    let viernes = document.createElement("option");
    let sabado = document.createElement("option");
    let domingo = document.createElement("option");
    let labelHoraInicio = document.createElement("label");
    let horaInicio = document.createElement("input");
    let labelHoraFin = document.createElement("label");
    let horaFin = document.createElement("input");


    labelEst.textContent = "Seleccione el estudiante";
    labelCur.textContent = "Seleccione el curso";
    labelDias.textContent = "Seleccione el día";
    titulo.textContent = "Inscribir estudiante a un curso";
    lunes.textContent = "Lunes";
    martes.textContent = "Martes";
    miercoles.textContent = "Miercoles";
    jueves.textContent = "Jueves";
    viernes.textContent = "Viernes";
    sabado.textContent = "Sabado";
    domingo.textContent = "Domingo";
    labelHoraInicio.textContent = "Ingrese la hora de inicio en el siguiente formato (hora:minutos)";
    labelHoraFin.textContent = "Ingrese la hora de fin en el siguiente formato (hora:minutos)";

    for(let i = 0; i < estudiantes.length; i++){
        let opEs = document.createElement("option");
        opEs.setAttribute("value", "est" + i);
        opEs.textContent = estudiantes[i].nombre;
        listaEst.appendChild(opEs);
    }
    for(let i = 0; i < cursos.length; i++){
        let opCu = document.createElement("option");
        opCu.setAttribute("value", "cur" + i);
        opCu.textContent = estudiantes[i].nombre;
        listaCur.appendChild(opCu);
    }

    dias.appendChild(lunes);
    dias.appendChild(martes);
    dias.appendChild(miercoles);
    dias.appendChild(jueves);
    dias.appendChild(viernes);
    dias.appendChild(sabado);
    dias.appendChild(domingo);

    contenedor.appendChild(titulo);
    contenedor.appendChild(labelEst);
    contenedor.appendChild(listaEst);
    contenedor.appendChild(labelCur);
    contenedor.appendChild(listaCur);
    contenedor.appendChild(labelDias);
    contenedor.appendChild(dias);
    contenedor.appendChild(labelHoraInicio);
    contenedor.appendChild(horaInicio);
    contenedor.appendChild(labelHoraFin);
    contenedor.appendChild(horaFin);
    espacio.appendChild(contenedor);
}

function horarioCurso(){
    console.log("This is a test");
}