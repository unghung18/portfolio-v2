import { ZodSchema, z } from 'zod'
import { RequestBodyCreateAccount } from './type'

export const PostInputSchema: ZodSchema<RequestBodyCreateAccount['POST']> =
  z.array(
    z.object({
      id: z.number(),
      credential: z.string(),
      credentialType: z.string(),
    })
  )

export type PostInput = z.infer<typeof PostInputSchema>
