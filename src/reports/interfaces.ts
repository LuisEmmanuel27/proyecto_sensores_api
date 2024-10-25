import { Sensor } from '@/sensors/interfaces'
import { User } from '@/users/interfaces'

export interface Report {
  id: number
  sensor: Sensor // Relación con Sensor (obligatorio)
  sensorId: number // Referencia obligatoria al sensor
  content: string // Contenido del reporte
  createdAt: Date // Fecha de creación del reporte
  user: User // Relación con el usuario que generó el reporte
  userId: number // Referencia obligatoria al usuario
}
