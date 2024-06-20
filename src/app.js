const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {config} = require('dotenv');
config();

const booksRoutes = require('./routes/book.routes');


//usamos express para los middleware
const app = express();
app.use(bodyParser.json());


// Conexión a la base de datos

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME});
const db = mongoose.connection;


app.use('/books', booksRoutes);
const PORT = process.env.PORT || 3000;




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});