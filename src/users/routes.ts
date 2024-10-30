import { Router } from 'express'
import { usersController } from './controller'
import { User, UserCreateInput, UserUpdateInput } from './interfaces'
import { userSchema } from './schemas'

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

  usersRouter.post('/', async (req, res) => {
    // Validar el cuerpo de la solicitud usando `safeParse`
    const validationResult = userSchema.safeParse(req.body)

    // Si la validación falla
    if (!validationResult.success) {
      return res.status(400).json({ message: validationResult.error.errors })
    }

    try {
      const data: UserCreateInput = validationResult.data
      const newUser = await controller.createUser(data)
      res.status(201).json(newUser)
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario' })
    }
  })

  usersRouter.put('/:id', async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(400).json({ message: 'Falta el id del usuario' })

    try {
      const data: UserUpdateInput = {
        id: Number(id),
        email: req.body.email,
        names: req.body.names,
        surnames: req.body.surnames,
      }

      const updatedUserResponse = await controller.updateUser(data)

      if (!updatedUserResponse.success)
        return res.status(404).json({ message: updatedUserResponse.message })

      res.status(200).json(updatedUserResponse)
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error inesperado al actualizar el usuario' })
    }
  })

  return usersRouter
}
