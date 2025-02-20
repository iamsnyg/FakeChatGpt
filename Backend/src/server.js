import express from 'express';
import 'dotenv/config.js';
import app from './app.js';
import http from 'http';


const server = http.createServer(app);
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 });