import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestBody, Response } from './type'

export const getCodeGenerationConfigurationList = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/generate-codes/list',
    params,
  })
  return data
}

export const useQueryGetCodeGenerationConfigurationList = (
  params: RequestBody['GET'],
  options?: any
) => {
  return useQuery<Response['GET']>(
    ['/api/v1/generate-codes/list', params],
    () => getCodeGenerationConfigurationList(params),
    { ...defaultOption, ...options }
  )
}
