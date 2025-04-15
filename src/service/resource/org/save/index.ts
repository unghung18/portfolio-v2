import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postOrg = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: '/api/v1/orges',
    data: requestBody,
  })
}

export const putOrg = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  const { id } = requestBody
  return await authResourceApi({
    method: 'put',
    url: `/api/v1/orges?id=${id}`,
    data: requestBody,
  })
}
