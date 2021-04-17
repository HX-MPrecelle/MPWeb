//  EFECTO APARECE/DESAPARECE DE COSTO MENSUAL UNA SOLA VEZ Y QUEDA EN PANTALLA

const apareceDesaparece = () => {
    $("#costoMensual").fadeToggle(1500, () => {
        $("#costoMensual").fadeToggle(1500)
    })
}

apareceDesaparece()