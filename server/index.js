require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')
const app = express()

// set up the port
const { SERVER_PORT, CONNECTION_STRING } = process.env
const PORT = SERVER_PORT || 4000

// import controllers
const houseCtrl = require('./Controllers')

app.use(express.json())

massive(CONNECTION_STRING).then( db =>{
    app.set('db', db);
    app.listen(PORT, () => console.log(`RETURN OF THE PORT ${PORT}`))
}).catch(err => console.log(err))

// End points
// app.get('/api/houses', houseCtrl.getHouses)
// app.post('/api/house', houseCtrl.addHouse)
// app.delete('/api/house/:id', houseCtrl.deleteHouse)