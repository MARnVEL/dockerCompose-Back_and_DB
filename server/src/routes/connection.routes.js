const express = require('express');

const router = express.Router();


const {
    getMongoConnection,
    getMySQLConnection
} = require('../controllers/connection.controllers');

console.log('dentro de ruotes este es el controlador', getMySQLConnection)

// Obtener respuesta de MySQL
router.get('/check-mysql-connection', getMySQLConnection);

// Obtener respuesta de Mongo
router.get('/check-mongodb-connection', getMongoConnection);





module.exports = router;

