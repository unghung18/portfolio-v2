import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestParams, Response } from './type'

export const getDepartmentDetail = async (
  params: RequestParams['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: `/api/v1/department`,
    params,
  })
  return data
}

export const useQueryDepartmentDetail = (
  params: RequestParams['GET'],
  options?: any
) => {
  return useQuery(
    [`/api/v1/department`, params],
    () => getDepartmentDetail(params),
    {
      ...defaultOption,
      ...options,
    }
  )
}
