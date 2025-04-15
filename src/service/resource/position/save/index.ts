import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postPosition = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: `/api/v1/position`,
    data: requestBody,
  })
}

export const putPosition = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'put',
    url: `/api/v1/position`,
    data: requestBody,
    params: {
      positionId: requestBody?.id,
    },
  })
}
