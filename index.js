const express = require('express')
const app = express()
const port = 3015

const cors = require('cors')
const setupDB = require('./config/database')
const router = require('./config/routes')

app.use(express.json())
setupDB()
app.use(cors())

app.get('/', (req,res) => {
    res.send('Welcome to the admin app')
})

app.use('/',router)

app.listen(port, () => {
    console.log('listening to the port,',port)
})