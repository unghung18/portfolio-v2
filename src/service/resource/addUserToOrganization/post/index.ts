import { authResourceApi } from '@/config/auth'
import { RequestBodyCreateAccount } from './type'

export const createAccount = async (
  requestBody: RequestBodyCreateAccount['POST']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: '/api/v1/user-company/account',
    data: requestBody,
  })
}
