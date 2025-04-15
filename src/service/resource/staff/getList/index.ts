import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestBody, Response } from './type'

export const getStaffUnAssignList = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'GET',
    url: '/api/v1/employee/unassigned/list',
    params,
  })
  return data
}

export const getStaffList = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'GET',
    url: '/api/v1/employee/list',
    params,
  })
  return data
}

export const useQueryStaffList = (
  params: RequestBody['GET'],
  options?: any
) => {
  return useQuery<Response['GET']>(
    ['/api/v1/employee/list', params],
    () => getStaffList(params),
    {
      ...defaultOption,
      ...options,
    }
  )
}
