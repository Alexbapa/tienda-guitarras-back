require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const { dbConnection } = require('./config/db');
dbConnection();
app.listen(process.env.PORT, () => {
   console.log('se levanto la api' + process.env.PORT);
}
)
//localhost:5000/
app.get('/', (req, res) => {
   res.send('estoy en inicio')
})  
//collections
//Customers
app.use('/customers', require('../src/routers/customers.routers'));
//Verificar
app.use('/verificar', require('../src/routers/verificar.routers'));
//Ingresar
app.use('/login', require('../src/routers/login.routers'));