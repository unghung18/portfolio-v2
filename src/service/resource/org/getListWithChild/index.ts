import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestBody, Response } from './type'

const URL = '/api/v1/orges/list-parent-child'

export const getOrgWithChildList = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: URL,
    params,
  })
  return data
}

export const useQueryGetOrgWithChildList = (
  params: RequestBody['GET'],
  options?: any
) => {
  return useQuery<Response['GET']>(
    [URL, params],
    () => getOrgWithChildList(params),
    { ...defaultOption, ...options }
  )
}
