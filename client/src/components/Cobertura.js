const Cobertura = () => {
  return (
    <section className="cobertura revelar">
        <div className="container-cobertura">
            <h2><i className="fas fa-map-marker-alt"></i> Zonas de Cobertura</h2>
            <div className="zonas-grid">
                {["Cipolletti", "Neuquén Capital", "Plottier", "Centenario", "Fernández Oro"].map(zona => (
                    <div key={zona} className="zona-item"><strong>{zona}</strong></div>
                ))}
            </div>
        </div>
    </section>
  );
};
export default Cobertura;