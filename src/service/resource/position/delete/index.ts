import { authResourceApi } from '@/config/auth'
import { RequestBody, Response } from './type'

export const deletePosition = async (
  params: RequestBody['DELETE']
): Promise<Response['DELETE']> => {
  const { data } = await authResourceApi({
    method: 'delete',
    url: `/api/v1/position`,
    params,
  })
  return data
}
