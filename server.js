const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API запущено'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
