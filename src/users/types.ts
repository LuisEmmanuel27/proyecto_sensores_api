import {
  User,
  UserCreated,
  UserCreateInput,
  UserUpdated,
  UserUpdateInput,
} from './interfaces'

// controllers/users/types.ts
export interface IUsersController {
  getAll: () => Promise<User[]>
  createUser: (user: UserCreateInput) => Promise<UserCreated>
  updateUser: (user: UserUpdateInput) => Promise<UserUpdated>
}
