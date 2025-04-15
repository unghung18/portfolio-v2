import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'

export const getOrgList = async (params: any): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/bank/list',
    params,
  })
  return data.data
}

export const useQueryGetOrgList = (params: any, options?: any) => {
  return useQuery<any>(
    ['/api/v1/bank/list', params],
    () => getOrgList(params),
    { ...defaultOption, ...options }
  )
}

export const getBankOrgList = async (params: any): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/bank/list/bank-orges',
    params,
  })
  return data.data
}

export const useQueryGetBankOrgList = (params: any, options?: any) => {
  return useQuery<any>(
    ['/api/v1/bank/list/bank-orges', params],
    () => getBankOrgList(params),
    { ...defaultOption, ...options }
  )
}
