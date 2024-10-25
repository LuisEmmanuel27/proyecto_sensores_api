import { Sensor } from '@/sensors/interfaces'

export interface User {
  id: number
  email: string
  password: string
  names: string // Ahora es obligatorio
  surnames: string // Ahora es obligatorio
  createdAt: Date
  sensors?: Sensor[] // Opcional, un usuario puede no tener sensores
  reports?: Report[] // Relación opcional con Report, puede no tener reportes
}

export interface UserCreateInput {
  email: string
  password: string
  names: string
  surnames: string
}

export interface UserCreated {
  names: string
  surnames: string
}
