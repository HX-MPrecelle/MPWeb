// Ingreso de dinero disponible y devolución de la opción viable
function elegirPlan() {
    let presupuesto = Number(prompt("¿Cuál es su presupuesto para armar su sitio web? (Ingrese un número en pesos argentinos, sin sigo '$' ni comas, ni puntos.."));
    if(presupuesto == "") {
        alert("Usted no ha ingresado un presupuesto válido");
        console.log("El usuario no ha ingresado el presupuesto para definir su plan adecuado");
    } else if((presupuesto > 1) && (presupuesto <= 5000)) {
        alert("Usted puede contratar el plan 'Bronze'");
        console.log("El usuario puede contratar el plan 'Bronze'");  
    } else if((presupuesto > 5000) && (presupuesto <= 10000)) {
        alert("Usted puede contratar el plan 'Silver'");
        console.log("El usuario puede contratar el plan 'Silver'");
    } else if (presupuesto > 10000) {
        alert("Usted puede contratar el plan 'Gold'");
        console.log("El usuario puede contratar el plan 'Gold'");
    } else {
        alert("Has ingresado un presupuesto inválido");
        console.warn("El usuario ha ingresado datos inválidos");
    }
}

//Declaro variables para funciones entre linea 31 y 87 (Funciones para personalizar presupuesto)
let sumaPlan = parseInt(0)
let sumaMantenimiento = parseInt(0)
let sumaDominio = parseInt(0)
let dominio = ""
let nombreUsuario = ""
let apellidoUsuario = ""

function presupuestoPersonal() {
    alert("¡Empezaremos a presupuestar su sitio web!")
    nombreUsuario = prompt("Ingrese su nombre:")
    apellidoUsuario = prompt("Ingrese su apellido:")
    nuevoDominio()
    hostingWeb()
    mantenimiento()
}

function nuevoDominio(){
    let checkNuevoDominio = confirm("¿Quiere adquirir un nuevo dominio?")
    if(checkNuevoDominio == true) {
        dominio = prompt("Ingrese el dominio que usted desea a continuación (ej: www.midominio.com):") 
        sumaDominio = parseInt(1500)
    } else {
        alert("Usted no quiere adquirir un nuevo dominio")
        sumaDominio = parseInt(0)
    }
}

function hostingWeb() {
    let planElegido = prompt("Ahora escriba el plan de web hosting que usted desea. Puede ser Bronze, Silver o Gold...")
    switch(planElegido){
        case 'Bronze':
            sumaPlan = parseInt(4500)
            alert("Ha elegido el plan Bronze")
        break
        case 'Silver':
            sumaPlan = parseInt(8500)
            alert("Ha elegido el plan Silver")
        break
        case 'Gold':
            sumaPlan = parseInt(12500)
            alert("Ha elegido el plan Gold")
        break        
    }
}

function mantenimiento() {
    let checkMantenimiento = confirm("¿Desea que mantengamos su web de moda y la actualicemos mensualmente?")
    if(checkMantenimiento == true) {
        alert("¡Una excelente decisión! Lo mantendremos actualizado todos los meses.")
        sumaMantenimiento = parseInt(2500)
    } else {
        alert("Muy bien, no has solicitado el mantenimiento ahora, pero puedes contactarnos más adelante para que empecemos a realizarlo")
        sumaMantenimiento = parseInt(0)
    }
    presupuestoFinal()
}

function presupuestoFinal() {
    let sumaTotal = sumaDominio + sumaPlan + sumaMantenimiento
    let sumaAnual = sumaDominio + sumaPlan
    let sumaMensual = sumaMantenimiento
    let confirmacionFinal = "Muchas gracias por ponerte en contacto con nosotros, " + nombreUsuario + " " + apellidoUsuario + ". El dominio elegido es: " + dominio + ". A continuación le daremos los detalles del costo por los servicios elegidos. Deberá abonar por primera vez $" + sumaTotal + " . Y luego abonará $" + sumaAnual + "anualmente. Además, el servicio tendrá un costo mensual de $" + sumaMensual + "."
    alert(confirmacionFinal) 
}