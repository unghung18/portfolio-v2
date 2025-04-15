import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestBody, Response } from './type'

export const getPositionList = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'GET',
    url: '/api/v1/position/list',
    params,
  })
  return data
}

export const useQueryPositionList = (
  params: RequestBody['GET'],
  options?: any
) => {
  return useQuery<Response['GET']>(
    ['/api/v1/position/list', params],
    () => getPositionList(params),
    { ...defaultOption, ...options }
  )
}

export const getPositionListByDepartmentId = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'GET',
    url: '/api/v1/position/by-departmentIds',
    params,
  })
  return data
}

export const useQueryGetPositionListByDepartmentId = (
  params: RequestBody['GET'],
  options?: any
) => {
  return useQuery<Response['GET']>(
    ['/api/v1/position/by-departmentIds', params],
    () => getPositionList(params),
    { ...defaultOption, ...options }
  )
}