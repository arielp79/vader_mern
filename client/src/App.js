import React, { useState, useEffect } from 'react';
import './style.css';
import Hero from './components/Hero';
import Header from './components/Header';
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Instagram from './components/Instagram';
import Visor from './components/Visor';
import Cobertura from './components/Cobertura';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsApp from './components/Whatsapp';

function App() {
    const [visor, setVisor] = React.useState({ abierto: false, fotos: [], indice: 0 });
    const [formData, setFormData] = React.useState({ nombre: '', correo: '', mensaje: '' });

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.revelar').forEach(seccion => {
            observer.observe(seccion);
        });

        return () => observer.disconnect();
    }, []);

    const trabajos = [
        { 
            id: 'tinglado', 
            titulo: 'Tinglado', 
            imgPrincipal: 'imagenes/tinglado-final.jpg', 
            fotos: ['imagenes/tinglado-final.jpg', 'imagenes/tinglado-proceso1.jpg', 'imagenes/tinglado-proceso2.jpg', 'imagenes/tinglado-proceso3.jpg', 'imagenes/tinglado-proceso4.jpg'] 
        },
        { 
            id: 'reja', 
            titulo: 'Reja', 
            imgPrincipal: 'imagenes/reja-final.jpg', 
            fotos: ['imagenes/reja-final.jpg', 'imagenes/reja-proceso1.jpg', 'imagenes/reja-proceso2.jpg', 'imagenes/reja-proceso3.jpg', 'imagenes/reja-proceso4.jpg', 'imagenes/reja-proceso5.jpg'] 
        },
        { 
            id: 'muebles', 
            titulo: 'muebles', 
            imgPrincipal: 'imagenes/mueble-final.jpg', 
            fotos: ['imagenes/mueble-final.jpg', 'imagenes/mueble-proceso1.jpg', 'imagenes/mueble-proceso2.jpg'] 
        }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const cambiarFoto = (dir, e) => {
        e.stopPropagation();
        const total = visor.fotos.length;
        setVisor({ 
            ...visor, 
            indice: (visor.indice + dir + total) % total 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/guardar-consulta', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                alert("¡Consulta enviada!");
                setFormData({ nombre: '', correo: '', mensaje: '' });
            }
        } catch (err) {
            alert("Error al conectar con el servidor de la base de datos.");
        }
    };

    return (
        <div>
            <Header />
            <Hero />
            <SobreNosotros />
            <Servicios />
            <Galeria trabajos={trabajos} setVisor={setVisor} />
            <Instagram />
            <Cobertura />
            <Contacto formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Footer />
            <WhatsApp />
            <Visor visor={visor} setVisor={setVisor} cambiarFoto={cambiarFoto}/>

           
            
        </div>
    );
}

export default App;