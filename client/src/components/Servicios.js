const Servicios = () => {
  
    return (
    <section id="servicios">
        <h2 className="revelar">Nuestros Servicios</h2>
        <div className="servicios-grid revelar">
            <div className="card revelar zoom-in">
                <h3>Seguridad</h3>
                <p>Rejas, portones levadizos y cerramientos perimetrales.</p>
            </div>
            <div className="card revelar zoom-in" style={{ transitionDelay: '0.2s' }}>
                <h3>Estructuras</h3>
                <p>Techos, tinglados y escaleras metálicas.</p>
            </div>
            <div className="card revelar zoom-in" style={{ transitionDelay: '0.4s' }}>
                <h3>Decoración</h3>
                <p>Muebles estilo industrial y herrería artística.</p>
            </div>
        </div>
    </section>
  );
};

export default Servicios;