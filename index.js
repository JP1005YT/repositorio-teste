import express from 'express';
import http from 'http';

const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static("public"));

// Criação do servidor HTTP
const server = http.createServer(app);

// Iniciando o servidor na porta 5500
server.listen(5500, () => {
    console.log('Servidor HTTP aberto na porta 5500');
});
