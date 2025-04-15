import { authResourceApi } from '@/config/auth'
import { BaseResponse } from '@/service/type'
import { RequestBodyInviteUser } from './type'

export const actionInviteUser = async (
  requestBody: RequestBodyInviteUser
): Promise<BaseResponse<{ id: number }>> => {
  const { data } = await authResourceApi({
    method: 'post',
    url: '/api/v1/company-invite',
    data: requestBody,
  })

  return data
}
