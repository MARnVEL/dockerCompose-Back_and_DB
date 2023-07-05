


//Importing external libraries
const express = require('express');
const { connect } = require('mongoose');
const mysql = require('mysql2');

//Importing Routes
// const routes = require('./routes/connection.routes');


//Initialize express
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    return res.status(200).send('Hola');
});

app.get('/check-mongodb-connection', ( _, res ) => {
    connect(`mongodb://${process.env.MONGO_DB_HOST}:27017`)
    .then(() => {
        res.send("connected");
    })
    .catch((err) => {
        console.log(process.env.MONGO_DB_HOST);
        console.log(err);
        res.send("not connected");
    });
});


app.get('/check-mariadb-connection', ( _, res ) => {
    const connection = mysql.createConnection({
        host: process.env.MARIADB_HOST,
        user: process.env.MARIADB_USER,
        password: process.env.MARIADB_PASSWORD,
    });
    
    const query = connection.query("SELECT 1;");

    if (query) {
        return res.send("connected");
    }

    res.send("not connected");
});

// // ROUTES:
// app.use(routes);


app.listen(port, () => {
    console.log(`Server listenning on port ${port}. Go to http://localhost:${port}/`);
});


