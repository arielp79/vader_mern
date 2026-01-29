import React from 'react';

const Visor = ({ visor, setVisor, cambiarFoto }) => {
    // Si no está abierto, no dibujamos nada
    if (!visor?.abierto) return null;

  return (
    <div className="lightbox" style={{display: 'flex'}} onClick={() => setVisor({...visor, abierto: false})}>
        <span className="cerrar-lightbox" onClick={() => setVisor({...visor, abierto: false})}>&times;</span>
        <button className="flecha izq" onClick={(e) => cambiarFoto(-1, e)}>&#10094;</button>
        <img id="img-ampliada" src={visor.fotos[visor.indice]} alt="Trabajo ampliado" />
        <button className="flecha der" onClick={(e) => cambiarFoto(1, e)}>&#10095;</button>
    </div>
            
    );
};
export default Visor;