import express, { Express, Request, Response } from 'express'
import { createUsersRouter } from './routes/users'

process.loadEnvFile()
const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/users', createUsersRouter())

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
