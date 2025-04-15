import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestParams, Response } from './type'

export const getPositionDetail = async (
  params: RequestParams['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: `/api/v1/position`,
    params,
  })
  return data
}

export const useQueryPositionDetail = (
  params: RequestParams['GET'],
  options?: any
) => {
  return useQuery(
    [`/api/v1/position`, params],
    () => getPositionDetail(params),
    {
      ...defaultOption,
      ...options,
    }
  )
}
