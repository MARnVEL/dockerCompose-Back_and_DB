
const { createMySQLConnection } = require('../db/mysqlConnection.db');
const { dbConnect } = require('../db/mongoConnection.db');


ctrlConnection = {};

ctrlConnection.getMySQLConnection = ( _, res ) => {

    console.log('Entró al getMySQLConnection del controlador')
    const connDB = createMySQLConnection();
    try {

        const query = connDB.query("SELECT 1;");
        if (query) {
            return res.send("connected to the MySQL DataBase");
        };
        
        res.send("not connected to to the MySQL DataBase");
        
    } catch (error) {
        console.log("Error en el controlador de MySQL", error.message);
    }


};

ctrlConnection.getMongoConnection = ( _, res ) => {

    try {
        console.log("Entró al try del controlador de la conexión de Mongo.");

        const connection = dbConnect();
        console.log("connection despúes de conentar a mongo en el getMongoConnection: ", connection)

        if (connection) {
            return res.send("connected to the Mongo DataBase");
        };
        res.send("not connected to the Mongo DataBase");

    } catch (error) {
        res.json({
            msg: "Error al conectar con Mongo"
        });
    };


};



module.exports = ctrlConnection;





