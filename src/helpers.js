export function calcularTotal(cantidad, plazo){
    let totalCandidad;
    if(cantidad <= 100){
        totalCandidad = cantidad * .25;
    } else if(cantidad > 1000 && cantidad <= 5000){
        totalCandidad = cantidad * .20;
    } else if(cantidad > 5000 && cantidad <= 10000){
        totalCandidad = cantidad * .15;
    } else {
        totalCandidad = cantidad * .10;
    }

    let totalPlazo = 0;
    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .10;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24:
            totalPlazo = cantidad * .20;
            break;
    
        default:
            break;
    }

    return totalPlazo + totalCandidad + cantidad;
}