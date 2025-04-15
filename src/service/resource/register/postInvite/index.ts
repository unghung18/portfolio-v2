import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postInviteRegister = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: '/api/v1/user-account',
    data: requestBody,
    params: {
      inviteCode: requestBody.inviteCode?.split('_').at(1),
    },
  })
}
