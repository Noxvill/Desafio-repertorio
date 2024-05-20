const fs = require('fs')



const frontFile = (req,res) => {
    res.sendFile(__dirname + '/index.html')
}

const getSongs = ("/canciones", (req, res) =>{

const canciones = JSON.parse(fs.readFileSync('canciones.json'))
res.json(canciones)
})


const addSong= (req, res) => {
    
    const { titulo, artista, tono } = req.body;

const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'))

canciones.push({

    titulo,
    artista,
    tono

})

fs.writeFileSync('canciones.json', JSON.stringify(canciones))

    res.send("Canción agregada con éxito!")

}

const delSong = (req, res) =>{
    // const { id } = req.params
    //     const canciones = JSON.parse(fs.readFileSync("canciones.json"))
    //     const index = canciones.findIndex(p => p.id == id)
    //     canciones.splice(index, 1)
    //     fs.writeFileSync("canciones.json", JSON.stringify(canciones))
    //     res.send("Canción eliminada con éxito")
        
    const { id } = req.params

    const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'))

    const filteredTodos = canciones.filter(cancion => cancion.id != id);


    fs.writeFileSync('canciones.json', JSON.stringify(filteredTodos))

    res.status(200).send('Eliminado')
}

const updateSong = (req, res) => {
    console.log("ID recibido:", req.params.id);
    console.log("Datos recibidos:", req.body);

    const { id } = req.params;
    const { titulo, artista, tono } = req.body;

    const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'));
    const updateCanciones = canciones.map(cancion => 
        cancion.id == id ? { ...cancion, titulo, artista, tono } : cancion
    );

    fs.writeFileSync('canciones.json', JSON.stringify(updateCanciones));
    res.status(200).send('Canción modificada con éxito');
};

module.exports={

frontFile,
getSongs,
addSong,
updateSong,
delSong

} 