import { Sensor } from '@/sensors/interfaces'

export interface User {
  id: number
  email: string
  password: string
  name?: string | null // Opcional
  secondName?: string | null // Opcional
  firstLastName?: string | null // Opcional
  secondLastName?: string | null // Opcional
  sensors?: Sensor[] // Opcional, ya que puede no tener sensores
}

export interface UserCreateInput {
  email: string
  password: string
  name?: string | null
  secondName?: string | null
  firstLastName?: string | null
  secondLastName?: string | null
}

export interface UserCreated {
  name?: string | null
  secondName?: string | null
  firstLastName?: string | null
  secondLastName?: string | null
}
