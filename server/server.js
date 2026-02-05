const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("Intentando conectar a:", process.env.MONGO_URI); // Para ver si lee bien el .env

mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000 // Si en 5 segundos no conecta, tira error
})
.then(() => console.log("✅ ¡LOGRADO! Conectado a MongoDB Atlas"))
.catch(err => console.error("❌ ERROR DE CONEXIÓN:", err.reason || err));

const Consulta = mongoose.model('Consulta', new mongoose.Schema({
    nombre: String, correo: String, mensaje: String, fecha: { type: Date, default: Date.now }
}));

app.post('/guardar-consulta', async (req, res) => {
    try {
        const nueva = new Consulta(req.body);
        await nueva.save();
        res.status(200).send("OK");
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// Usar el puerto que asigne Render o el 3001 por defecto si es local
const PORT = process.env.PORT || 3001; 

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});