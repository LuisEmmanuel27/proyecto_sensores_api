import { Router } from 'express'
import { usersController } from '../controllers/users/users'
import { User } from '../interfaces/interfaces'

export const createUsersRouter = () => {
  const usersRouter = Router()
  const controller = new usersController()

  usersRouter.get('/', async (req, res) => {
    try {
      const users: User[] = await controller.getAll()
      res.json(users)
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los usuarios' })
    }
  })

  return usersRouter
}
