import { User } from '../../interfaces/interfaces'
import prisma from '../../lib/prisma'
import { IUsersController } from '../../types/users'

export class usersController implements IUsersController {
  constructor() {}

  // obtener todos los usuarios
  getAll = async (): Promise<User[]> => {
    const users = await prisma.user.findMany()
    return users
  }
}
