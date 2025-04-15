import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestParams, Response } from './type'

export const getUserDetail = async (
  params: RequestParams['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: `/api/v1/employee`,
    params,
  })
  return data
}

export const useQueryUserDetail = (
  params: RequestParams['GET'],
  options?: any
) => {
  return useQuery([`/api/v1/employee`, params], () => getUserDetail(params), {
    ...defaultOption,
    ...options,
  })
}
