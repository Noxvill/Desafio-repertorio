const express = require ('express')
const routes = require('./routes/index')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
// Middlewares

app.use(express.json())
app.use(morgan('dev'))
app.use(cors( {
origin:'http://127.0.0.1:3000/'}

))

// Rutas

app.use('/api', routes)

module.exports= app;