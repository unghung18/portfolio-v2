import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postFiscalYear = async (requestBody: RequestBody['POST']) => {
  const { data } = await authResourceApi({
    url: '/api/v1/fiscal-year-config',
    method: 'post',
    data: requestBody,
  })
  return data
}
