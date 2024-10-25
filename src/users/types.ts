import { User, UserCreated, UserCreateInput } from './interfaces'

// controllers/users/types.ts
export interface IUsersController {
  getAll: () => Promise<User[]>
  createUser: (user: UserCreateInput) => Promise<UserCreated>
}
