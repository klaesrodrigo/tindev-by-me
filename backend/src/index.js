import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import routes from './routes'

const { DB_URL_CONNECTION } = process.env

const app = express()

mongoose.connect(DB_URL_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use('/', routes)
app.use('/', (req, res) => res.json({ message: 'olá mundo' }))

app.listen(3000, () => console.log('Started'))
