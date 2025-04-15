import { authUaaApi } from '@/config/auth'
import { BaseResponse } from '@/service/type'
import { END_POINT_TENANT_ROLE } from '../get'
import { RequestBodySaveTenantRole } from './type'

export const actionTenantRole = async (arg: {
  method: 'post' | 'put' | 'delete'
  params: {
    roleId?: number
  }
  data?: RequestBodySaveTenantRole
}): Promise<BaseResponse<{ id: number }>> => {
  const { data } = await authUaaApi({
    method: arg.method,
    url: END_POINT_TENANT_ROLE,
    params: arg.params,
    data: arg?.data,
  })

  return data
}
