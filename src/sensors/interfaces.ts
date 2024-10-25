import { User } from '@/users/interfaces'

export interface Sensor {
  id: number
  name: string
  location: Location // Relación con Location (obligatorio)
  locationId: number // Referencia obligatoria a la ubicación
  measurements?: Measurement[] // Opcional, puede no tener mediciones al inicio
  connected: boolean
  batteryLevel?: number // Opcional, ya que puede no aplicarse a todos los sensores
  temperatureMax?: number // Opcional, valor por defecto 30
  temperatureMin?: number // Opcional, valor por defecto 0
  humidityMax?: number // Opcional, valor por defecto 100
  humidityMin?: number // Opcional, valor por defecto 0
  readingInterval?: number // Opcional, valor por defecto 10
  user?: User // Relación opcional con el usuario que tiene el sensor
  userId?: number // Opcional, puede no estar asignado a un usuario al inicio
  addedAt: Date // Fecha de creación
  updatedAt?: Date // Campo actualizado automáticamente
}

export interface Location {
  id: number
  address: string
  sensors?: Sensor[] // Relación opcional con sensores
}

export interface Measurement {
  id: number
  sensor: Sensor // Relación con Sensor (obligatorio)
  sensorId: number // Referencia obligatoria al sensor
  temperature: number // Temperatura medida
  humidity: number // Humedad medida
  timestamp: Date // Fecha y hora de la medición
}
