const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/imagenes/hero.webp')` }}>
        <div className="hero-content revelar">
            <h1 className="nombre-empresa">HERRERÍA <span>Vader</span></h1>
            <p className="subtitulo-hero">Soluciones en Hierro a Medida</p>
            <a href="#contacto-form" className="btn">Presupuesto sin cargo</a>
        </div>
    </section>
  );
};
export default Hero;