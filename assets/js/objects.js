// Definicion de clases y objetos para aplicación JavaScript

class Plan {
    constructor(nombrePlan, precioPlan) {
        this.nombrePlan = nombrePlan
        this.precioPlan = parseInt(precioPlan)
        }
        sumaLink() {
            this.precioPlan = this.precioPlan * 1.10        
        }
}

const planes = []

planes.push(new Plan("Bronze", 4500))
planes.push(new Plan("Silver", 8500))
planes.push(new Plan("Gold", 12500))