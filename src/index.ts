import express, { Express } from 'express'
import { createUsersRouter } from './users/routes'

// process.loadEnvFile(), nueva feature de node.js 20.10
process.loadEnvFile()

// constantes
const app: Express = express()
const port = process.env.PORT || 3000

// middlewares
app.use(express.json())

// rutas
app.use('/users', createUsersRouter())

// iniciar el servidor
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
