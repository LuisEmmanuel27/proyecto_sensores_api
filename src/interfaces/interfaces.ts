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

export interface Sensor {
  id: number
  name: string
  location: Location // Relación con Location
  locationId: number // Referencia a la ubicación
  measurements?: Measurement[] // Opcional, ya que puede no tener mediciones
  connected: boolean
  batteryLevel?: number // Opcional
  temperatureMax?: number // Opcional, valor por defecto 30
  temperatureMin?: number // Opcional, valor por defecto 0
  humidityMax?: number // Opcional, valor por defecto 100
  humidityMin?: number // Opcional, valor por defecto 0
  readingInterval?: number // Opcional, valor por defecto 10
  user?: User // Relación con User
  userId?: number // Opcional, ya que puede no estar asignado a un usuario
}

export interface Location {
  id: number
  address: string
  sensors?: Sensor[] // Opcional, ya que puede no tener sensores
}

export interface Measurement {
  id: number
  sensor: Sensor // Relación con Sensor
  sensorId: number // Referencia al sensor
  temperature: number // Temperatura medida
  humidity: number // Humedad medida
  timestamp: Date // Fecha y hora de la medición
}
