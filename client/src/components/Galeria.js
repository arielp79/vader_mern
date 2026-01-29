const Galeria = ({ trabajos, setVisor}) => {
  
    return (
     <section id="galeria" className="galeria-seccion revelar">
        <h2>Nuestros Trabajos</h2>
        <div className="galeria-contenedor">
            {trabajos.map(t => (
                <div key={t.id} className="foto" onClick={() => setVisor({ abierto: true, fotos: t.fotos, indice: 0 })}>
                    <img src={t.imgPrincipal} alt={t.titulo} className="foto-galeria" />
                    <div className="overlay">
                        <span>VER PROCESO <br/><small>+{t.fotos.length - 1} FOTOS</small></span>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Galeria;