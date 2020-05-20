import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import routes from './routes'
import cors from 'cors'
const { DB_URL_CONNECTION, PORT } = process.env

const app = express()

mongoose.connect(DB_URL_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen(PORT, () => console.log('Server running on port ' + PORT))
