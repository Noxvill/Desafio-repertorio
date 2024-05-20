const { frontFile, createSong, updateSong, delSong, addSong, getSongs } = require('../../controllers/frontController')

const filesRouter = require('express').Router()
filesRouter.get('/',  frontFile)
filesRouter.get('/canciones',  getSongs)
filesRouter.post('/canciones',  addSong)
filesRouter.put('/canciones/:id',  updateSong)
filesRouter.delete('/canciones/:id',  delSong)

module.exports=filesRouter