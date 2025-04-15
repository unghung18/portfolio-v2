import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postStaff = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: `/api/v1/employee`,
    data: requestBody,
  })
}

export const putStaff = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'put',
    url: `/api/v1/employee`,
    data: requestBody,
    params: {
      employeeId: requestBody?.id,
    },
  })
}
