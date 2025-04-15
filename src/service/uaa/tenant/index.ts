import { authUaaApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'

export const END_POINT_CHECK_TENANT_EXIST =
  '/public-api/v1/tenant/verify-domain'

export const checkTenantExist = async (domain: string): Promise<any> => {
  const { data } = await authUaaApi({
    method: 'get',
    url: END_POINT_CHECK_TENANT_EXIST,
    params: {
      domain,
    },
  })
  return data
}

export const useQueryCheckTenantExist = (params: string, options?: any) => {
  return useQuery<any>(
    [END_POINT_CHECK_TENANT_EXIST, params],
    () => checkTenantExist(params),
    {
      ...defaultOption,
      ...options,
    }
  )
}
