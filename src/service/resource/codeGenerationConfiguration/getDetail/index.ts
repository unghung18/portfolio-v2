import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestParams } from './type'

export const getCodeGenerationConfigurationById = async (
  params: RequestParams['GET']
): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/generate-codes',
    params,
  })
  return data ? data.data : data
}

export const useQueryGetCodeGenerationConfigurationById = (
  params: any,
  options?: any
) => {
  return useQuery(
    ['/api/v1/generate-codes', params],
    () => getCodeGenerationConfigurationById(params),
    {
      ...defaultOption,
      ...options,
      enabled: !!params?.id,
    }
  )
}
