import express from "express"
import cors from 'cors'
import { db } from "./connect.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors())

app.get('/', (req, res) => {
    res.send('Só vamos trabalhar com os enpoints "/artists" e "/songs')
})

app.get('/artists', async(req, res) => {
    res.send(await db.collection('artists').find({}).toArray())
})

app.get('/songs', async(req, res) => {
    res.send(await db.collection('songs').find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
})