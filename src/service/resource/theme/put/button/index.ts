import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const putButtonConfig = async (
  requestBody: RequestBody['PUT']
): Promise<any> => {
  return await authResourceApi({
    method: 'put',
    url: '/api/v1/button-style',
    data: requestBody.data,
  })
}
