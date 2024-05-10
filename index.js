const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static("public"))

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

// Suas rotas e configurações do Express aqui...

https.createServer(options, app).listen(5500, () => {
    console.log('Servidor HTTPS iniciado na porta 443');
});
