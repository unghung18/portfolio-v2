import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postCodeGenerationConfiguration = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: '/api/v1/generate-codes',
    data: requestBody,
  })
}

export const updateCodeGenerationConfiguration = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  const { id } = requestBody
  return await authResourceApi({
    method: 'put',
    url: `/api/v1/generate-codes?id=${id}`,
    data: requestBody,
  })
}
