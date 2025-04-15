import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postRegister = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: '/api/v1/user-account/register',
    data: requestBody,
  })
}
