require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('conexion exitosa');
    } catch {
        console.log('erro en conexion');

    }


}

module.exports = { dbConnection };