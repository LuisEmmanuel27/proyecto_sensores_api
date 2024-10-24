import { User } from '../interfaces/interfaces'

// controllers/users/types.ts
export interface IUsersController {
  getAll: () => Promise<User[]>
}
