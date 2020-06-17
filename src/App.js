import React, {Fragment, useState} from 'react';
import Header from './components/Header.js';
import Formulario from './components/Formulario.js';
import Mensaje from './components/Mensaje.js';
import Resultado from './components/Resultado.js';
import Spinner from './components/Spinner.js';

function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  let componente;
  if(cargando){
    componente = <Spinner></Spinner>
  } else if(total ===0){
    componente = <Mensaje></Mensaje>
  }else{
    componente = <Resultado
                    total={total}
                    plazo={plazo}
                    cantidad={cantidad}
                ></Resultado>
  }
  return (
    <Fragment>
      <Header titulo="Cotizador"/>
      <div className="container">
        <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
        >
        </Formulario> 
        <div className="resultado">
            {componente}
          </div>
      </div>      
    </Fragment>
  );
}

export default App;
