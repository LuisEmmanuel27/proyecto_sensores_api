import prisma from '../../lib/prisma'
import bcrypt from 'bcrypt'
import { IUsersController } from '../../types/users'
import { User, UserCreated, UserCreateInput } from '../../interfaces/interfaces'

export class usersController implements IUsersController {
  constructor() {}

  // obtener todos los usuarios
  getAll = async (): Promise<User[]> => {
    const users = await prisma.user.findMany()
    return users
  }

  // crear usuario
  createUser = async (user: UserCreateInput): Promise<UserCreated> => {
    const hashedPassword = await bcrypt.hash(user.password, 10)

    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        name: user.name,
        secondName: user.secondName,
        firstLastName: user.firstLastName,
        secondLastName: user.secondLastName,
      },
    })

    return {
      name: newUser.name,
      secondName: newUser.secondName,
      firstLastName: newUser.firstLastName,
      secondLastName: newUser.secondLastName,
    }
  }
}
