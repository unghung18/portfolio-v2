import { authResourceApi } from '@/config/auth'
import { RequestBodyCreateAccount } from './type'

export const postSendEmailToOrganization = async (
  requestBody: RequestBodyCreateAccount['POST']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: '/api/v1/send-email',
    data: {
      ids: requestBody,
    },
  })
}
