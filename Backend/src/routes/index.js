const router = require('express').Router()
const filesRouter = require('./files/indexFilesRouter')

// Rutas de files
router.use('/files', filesRouter) 

// Ruta usuarios





module.exports= router 


