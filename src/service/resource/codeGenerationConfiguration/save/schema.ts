import { ZodSchema, z } from 'zod'
import { RequestBody } from './type'

export const SaveInputSchema: ZodSchema<RequestBody['SAVE']> = z.object({
  id: z.number().nullable().optional(),
  code: z
    .string().min(1),
    // .min(1, 'Đây là trường bắt buộc')
    // .max(25, 'Trường này không được vượt quá 25 kí tự')
    // .regex(/^[a-zA-Z0-9\-\/_]*$/, 'Mã bao gồm kí tự chữ, số và -/_'),
  applyType: z.string().min(1),
  name: z.string().min(1),
  fullCode: z.string().min(1),
  isActive: z.boolean(),
  bizAppId: z.number(),
  featureId: z.number(),
  apiId: z.number(),
  generateCodeMap: z.array(
    z.object({
      id: z.number().nullable().optional(),
      sequence: z.number(),
      type: z.string().min(1),
      sequenceData: z.object({
        numberStart: z.number(),
        step: z.number(),
        cycle: z.string().min(1),
        splitter: z.string().min(1),
      }),
      dateData: z.object({
        formatDate: z.string().min(1),
        splitter: z.string().min(1),
      }),
      textData: z.object({
        content: z.string().min(1),
        splitter: z.string().min(1),
      }),
    })
  ),
})

export type SaveInput = z.infer<typeof SaveInputSchema>
