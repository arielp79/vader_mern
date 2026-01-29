const Contacto = ({handleSubmit, formData, handleChange}) => {
  return (
    <section id="contacto-form" className="contacto-seccion revelar">
        <h2>Pedí tu Presupuesto</h2>
        <form className="formulario" onSubmit={handleSubmit}>
            <input 
                name="nombre" 
                type="text" 
                placeholder="Tu Nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                required 
            />
            <input 
                name="correo" 
                type="email" 
                placeholder="Tu Correo" 
                value={formData.correo} 
                onChange={handleChange} 
                required 
            />
            <textarea 
                name="mensaje" 
                placeholder="Detalles del trabajo..." 
                rows="5" 
                value={formData.mensaje} 
                onChange={handleChange} 
                required 
            ></textarea>
            <button type="submit" className="btn">Enviar Consulta ahora</button>
        </form>
    </section>
  );
};
export default Contacto;