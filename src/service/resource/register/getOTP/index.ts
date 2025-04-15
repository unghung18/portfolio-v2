import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postEmailOTP = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: '/api/v1/send-email/register',
    data: requestBody,
  })
}
