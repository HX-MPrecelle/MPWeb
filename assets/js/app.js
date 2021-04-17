const URLJSON = "../../planes.json"

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
                localStorage.setItem("Plan elegido", JSON.stringify(resultado))}
    })
 }

 