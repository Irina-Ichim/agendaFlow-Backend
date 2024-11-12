import express from 'express';
import { db } from './db.js'; 
import { PORT } from './config.js';

const app = express();

// Ruta básica
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
