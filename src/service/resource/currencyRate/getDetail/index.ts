import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestBody, Response } from './type'

export const getCurrencyRateDetail = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/currency-rate/by-company',
    params,
  })

  return data
}

export const useQueryGetCurrencyRateDetail = (
  params: RequestBody['GET'],
  options?: any
) => {
  return useQuery<Response['GET']>(
    ['/api/v1/currency-rate/by-company', params],
    () => getCurrencyRateDetail(params),
    { ...defaultOption, ...options }
  )
}
