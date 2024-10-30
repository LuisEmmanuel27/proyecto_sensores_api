import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import { IUsersController } from './types'
import {
  User,
  UserCreated,
  UserCreateInput,
  UserUpdated,
  UserUpdateInput,
} from './interfaces'
import { userUpdateSchema } from './schemas'
import { Prisma } from '@prisma/client'

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
        names: user.names,
        surnames: user.surnames,
      },
    })

    const { password, email, createdAt, ...userFiltered } = newUser
    return userFiltered
  }

  // editar usuario
  updateUser = async (user: UserUpdateInput): Promise<UserUpdated> => {
    try {
      userUpdateSchema.parse(user)

      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
          email: user.email,
          names: user.names,
          surnames: user.surnames,
        },
      })

      return {
        success: true,
        updateUser: updatedUser,
      }
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return {
          success: false,
          message: 'Datos invalidos',
        }
      }

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          return {
            success: false,
            message: 'Usuario no encontrado',
          }
        }
      }

      return {
        success: false,
        message: 'Error al actualizar el usuario',
      }
    }
  }
}
