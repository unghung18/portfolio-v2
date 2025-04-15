import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestParams } from './type'

export const getOrgById = async (
  params: RequestParams['GET']
): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/orges',
    params,
  })
  return data ? data.data : data
}

export const useQueryGetOrgById = (params: any, options?: any) => {
  return useQuery(['/api/v1/orges', params], () => getOrgById(params), {
    ...defaultOption,
    ...options,
  })
}
