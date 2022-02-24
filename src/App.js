import React, { useEffect } from 'react';
import Formulario from './components/Fomulario';

function App() {

    useEffect(()=>{

      const consultarApi = async() =>{
        const url = 'https://pixabay.com/api/?key=25231196-1b5e0b76be20793f83b5204b5'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
        console.log(resultado.hits)
      }

      consultarApi()
    },[]);


  return (
  
    <div className='container'>
      <div className='jumbotron'>
        <div className='lead text-center'>
          <p>Buscador de imagenes</p>
            <Formulario />
        </div>
      </div>
    </div>
    )
}

export default App;
