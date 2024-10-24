import { z } from 'zod'

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string().optional(),
  secondName: z.string().optional(),
  firstLastName: z.string().optional(),
  secondLastName: z.string().optional(),
})
