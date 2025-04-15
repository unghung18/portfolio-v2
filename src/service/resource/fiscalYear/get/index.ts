import { authResourceApi } from '@/config/auth'
import { QueryOptions, useQuery } from 'react-query'
import { defaultOption } from './../../../../config/reactQuery'
import { Response } from './type'

export const getFiscalYear = async (): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    url: '/api/v1/fiscal-year-config',
    method: 'get',
  })
  return data
}

export const useQueryGetFiscalYear = (
  options?: QueryOptions<Response['GET']>
) => {
  return useQuery<Response['GET']>(
    ['/api/v1/fiscal-year-config'],
    getFiscalYear,
    { ...defaultOption, ...options }
  )
}
