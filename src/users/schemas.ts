import { z } from 'zod'

export const userSchema = z.object({
  email: z.string().email({
    message: 'Debe ser un correo electrónico válido',
  }),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    .max(100, {
      message: 'La contraseña no puede tener más de 100 caracteres',
    }),
  names: z.string().min(1, { message: 'El campo nombres es obligatorio' }),
  surnames: z.string().min(1, { message: 'El campo apellidos es obligatorio' }),
})
