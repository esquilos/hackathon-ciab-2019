const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://esquilos:esquilos123@cluster0-ix8l7.mongodb.net/test?retryWrites=true&w=majority', 
    {
    useNewUrlParser: true,
    }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(process.env.PORT || 3333);