require('dotenv').config()
const app = require ('./src/app');

const PORT = process.env.PORT


app.listen(PORT, console.log(`Servidor corriendo :), en el puerto http://127.0.0.1:${PORT}`))