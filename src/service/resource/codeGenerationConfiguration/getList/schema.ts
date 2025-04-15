import { z, ZodSchema } from 'zod'
import { RequestBody } from './type'

export const GetInputSchema: ZodSchema<RequestBody['GET']> = z.object({
  search: z.string().optional(),
  bizAppId: z.number().nullable().optional(),
  featureId: z.number().nullable().optional(),
  isActive: z.boolean().nullable(),
  page: z.number(),
  size: z.number(),
})

export type GetInput = z.infer<typeof GetInputSchema>
