import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const postDepartment = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'post',
    url: `/api/v1/department`,
    data: requestBody,
  })
}

export const putDepartment = async (
  requestBody: RequestBody['SAVE']
): Promise<any> => {
  return await authResourceApi({
    method: 'put',
    url: `/api/v1/department`,
    data: requestBody,
    params: {
      departmentId: requestBody?.id,
    },
  })
}
