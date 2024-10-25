import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import { IUsersController } from './types'
import { User, UserCreated, UserCreateInput } from './interfaces'

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

    const { password, ...userWhitoutPassword } = newUser
    return userWhitoutPassword
  }
}
