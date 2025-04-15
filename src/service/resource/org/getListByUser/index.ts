import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestParams, Response } from './type'

const URL = '/api/v1/user-org-map/list'

export const getOrgListByUser = async (
  params: RequestParams['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: URL,
    params,
  })
  return data
}

export const useQueryGetOrgByUserList = (
  params: RequestParams['GET'],
  options?: any
) => {
  return useQuery<Response['GET']>(
    [URL, params],
    () => getOrgListByUser(params),
    {
      ...defaultOption,
      ...options,
    }
  )
}
