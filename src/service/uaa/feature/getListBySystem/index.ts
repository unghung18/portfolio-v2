import { authUaaApi } from '@/config/auth'
import { RequestBody, Response } from './type'

export const getFeatureBySystemList = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authUaaApi({
    method: 'get',
    url: '/api/v1/feature/list-by-system',
    params,
  })
  return data.data
}
