import { authResourceApi } from '@/config/auth'

export const assignUserToStaff = async (requestBody: {
  userId: number
  employeeId: number
}): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'post',
    url: `/api/v1/assign-employee-account`,
    data: requestBody,
  })
  return data ? data.data : data
}
