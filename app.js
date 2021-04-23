const URLJSON = "../../planes.json"
let details = JSON.parse(localStorage.getItem("Plan elegido"))

 // IMPRIMO CARDS DE PLANES CON AJAX

  $(document).ready (() => {
    $.getJSON(URLJSON, (respuesta, estado) => {
        if (estado == "success") {
            let datosCards = respuesta;
            for (let dato of datosCards) {
                $("#cardsPlanes").append(`<div class="col-lg-4 box">
                                            <h3>${dato.nombre}</h3>
                                            <h4>$ ${dato.precio}<span>[única vez]</span></h4>
                                            <ul>
                                            <li class=" pricing__box--list"><i class="bx bx-check"></i>${dato.infoA}</li>
                                            <li class=" pricing__box--list"><i class="bx bx-check"></i>${dato.infoB}</li>
                                            <li class=" pricing__box--list"><i class="bx bx-check"></i>${dato.infoC}</li>
                                            </ul>
                                            <button class="get-started-btn" onclick="guardoPlan(${dato.planid})">¡LO QUIERO!</a>
                                        </div>`)
            }
        }
    })
})

//CREO BOTON PARA INTERACTUAR Y GUARDAR DATOS EN STORAGE

const guardoPlan = (id) => {
        $.getJSON(URLJSON, (respuesta, estado) => {
            if (estado == "success") {
                let datosCards = respuesta
                let resultado = datosCards.find(p => p.planid == id)
                localStorage.setItem("Plan elegido", JSON.stringify(resultado))
                planSelected()
            }
    })
 }

 //OCULTO HTML VIEJO Y MUESTRO EL NUEVO UNA VEZ SELECCIONADO EL PLAN PARA CHECKOUT

const planSelected = () => {
    //IMPRIMO HTML CON LOS DATOS TOMADOS DESDE LOCALSTORAGE
    $("#planDetails").append(`<div class="box">
                                <h3>${details.nombre}</h3>
                                <h4>$ ${details.precio}<span>[única vez]</span></h4>
                                <ul class="text-center">
                                <li class=" pricing__box--list"><i class="bx bx-check"></i>${details.infoA}</li>
                                <li class=" pricing__box--list"><i class="bx bx-check"></i>${details.infoB}</li>
                                <li class=" pricing__box--list"><i class="bx bx-check"></i>${details.infoC}</li>
                                </ul>
                                <button onclick="confirmoPlan()" id="confirmButtonPlan" class="get-started-btn">CONFIRMAR</a>
                            </div>`)
    //OCULTO HTML EXISTENTE CON FADEOUT
    $("#cardsPlanes").fadeOut(300)
    //IMPRIMO NUEVO HTML CON FADEIN
    $("#generalDetails").fadeIn(300)
}

const confirmoPlan = () => {
    $("#costoMensual").fadeOut(300)
    $("#generalDetails").fadeOut(300)
    $("#successConfirmPlan").fadeIn(300)
}

 