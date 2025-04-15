import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'

export const getCountriesList = async (params: any): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/countries/list',
    params,
  })
  return data.data
}

export const useQueryGetCountriesList = (params: any, options?: any) => {
  return useQuery<any>(
    ['/api/v1/countries/list', params],
    () => getCountriesList(params),
    { ...defaultOption, ...options }
  )
}
