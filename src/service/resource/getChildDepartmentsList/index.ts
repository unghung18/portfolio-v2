import { authResourceApi } from '@/config/auth'
import { RequestBody, Response } from './type'

export const getChildDepartmentsList = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'GET',
    url: '/api/v1/department/by-parents',
    params,
  })
  return data
}
