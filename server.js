const express = require('express');
const app = express();
require('dotenv').config(); 
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`2good api running on port: ${port}`);
})

app.listen(port, '0.0.0.0', () => {
    console.log(`good api running on port: ${port}`);
});