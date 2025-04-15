import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postCurrencyRate = async (
  requestBody: RequestBody['POST']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: '/api/v1/currency-rate',
    data: requestBody,
  })
}

export const putCurrencyRate = async (
  requestBody: RequestBody['POST']
): Promise<any> => {
  return await authResourceApi({
    method: 'put',
    url: '/api/v1/currency-rate',
    data: requestBody,
  })
}
