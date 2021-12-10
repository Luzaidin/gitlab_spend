const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use("", routes);

// TODO: Verificar como usa css, js por fora
// app.use(express.static(path.join(__dirname,'src/style')));

const PORT = 3030;
app.listen(PORT, () => {
    console.log("SERVIÇO:", "RODANDO NA PORTA " + PORT);
});
