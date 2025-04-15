import { authResourceApi } from '@/config/auth'
import { RequestBody } from './type'

export const deleteUserCompany = async (requestBody: {
  deletedUserIds: Number[]
}): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'delete',
    url: `/api/v1/user-company`,
    data: requestBody,
  })
  return data ? data.data : data
}

export const bulkDeleteUser = async (
  requestBody: RequestBody['BULK_DELETE']
): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'delete',
    url: `/api/v1/user-company`,
    data: requestBody,
  })
  return data ? data.data : data
}
