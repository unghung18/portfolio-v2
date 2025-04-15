import { authApi } from '@/config/auth'
import { BaseResponse } from '@/service/type'
import { Token } from './type'

export const postLogin = async (
  requestBody: any
): Promise<BaseResponse<Token>> => {
  const { data } = await authApi({
    method: 'post',
    url: '/oauth/login',
    data: requestBody,
  })

  return data
}
