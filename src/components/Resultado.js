import React from 'react';

function Resultado({total, plazo, cantidad}) {
    
    return(
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${cantidad}</p>
            <p>A pagar en: {plazo}</p>
            <p>Cuotas de: ${total/plazo}</p>
            <p>Total a pagar: ${total}</p>
        </div>
    )
}

export default Resultado;