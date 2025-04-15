import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const putFontConfig = async (
  requestBody: RequestBody['PUT']
): Promise<any> => {
  return await authResourceApi({
    method: 'put',
    url: '/api/v1/font',
    data: requestBody.data,
  })
}
