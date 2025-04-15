import { authUaaApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import {
  ReqGetTenantRoleDetail,
  ReqGetTenantRoleList,
  ResGetTenantRoleDetail,
  ResGetTenantRoleList,
} from './type'

export const END_POINT_TENANT_ROLE = '/api/v1/role/multi-tenant'

export const getTenantRoleList = async (
  params: ReqGetTenantRoleList
): Promise<ResGetTenantRoleList> => {
  const { data } = await authUaaApi({
    method: 'get',
    url: END_POINT_TENANT_ROLE + '/list',
    params,
  })
  return data
}

export const useQueryGetTenantRoleList = (
  params: ReqGetTenantRoleList,
  options?: any
) => {
  return useQuery<ResGetTenantRoleList>(
    [END_POINT_TENANT_ROLE + '/list', params],
    () => getTenantRoleList(params),
    { ...defaultOption, ...options }
  )
}

export const getTenantRoleDetail = async (
  params: ReqGetTenantRoleDetail
): Promise<ResGetTenantRoleDetail> => {
  const { data } = await authUaaApi({
    method: 'get',
    url: END_POINT_TENANT_ROLE,
    params,
  })
  return data
}

export const useQueryGetTenantRoleDetail = (
  params: ReqGetTenantRoleDetail,
  options?: any
) => {
  return useQuery<ResGetTenantRoleDetail>(
    [END_POINT_TENANT_ROLE, params],
    () => getTenantRoleDetail(params),
    {
      ...defaultOption,
      ...options,
    }
  )
}
