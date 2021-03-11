// Aplicación para elegir plan adecuado en planes.html

function elegirPlan() {
    let presupuesto = Number(prompt("¿Cuál es su presupuesto para armar su sitio web? (Ingrese un número en pesos argentinos, sin sigo '$' ni comas, ni puntos.."));
    //debugger
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
