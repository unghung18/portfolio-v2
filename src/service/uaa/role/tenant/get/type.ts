import { BaseResponse, PageResponse } from '@/service/type'

export interface TenantRole {
  id: number
  name: string
  code: string
  systemId: number
  system: {
    id: number
    name: string
  }
  tenantId: number
  tenant: {
    id: number
    name: string
  }
  description: string
  numberOfUsers: number
  isActive: boolean
  level: number
  createdAt: string
  createdBy: number
  apis: {
    id: number
    name: string
  }[]
  apiIds: number[]
  creator: string
}

export type ReqGetTenantRoleList = {
  search?: string
  system?: {
    id: number
    name: string
  }
  systemId?: number
  isActive?: boolean
  page: number
  size: number
}

export type ResGetTenantRoleList = PageResponse<TenantRole[]>

export type ReqGetTenantRoleDetail = {
  roleId?: number
  tenantId?: number
  lastTenantId?: number
}

export type ResGetTenantRoleDetail = BaseResponse<TenantRole>
