import { BaseResponse } from '@/service/type'

export type RequestParams = {
  GET: { id: number }
}

type OrgDetail = {
  id?: number | null
  code: string
  name: string
  taxCode: string
  phone: string
  email: string
  address: string
  logo: string | null
  parentId?: number | null
  companyId: number | null
  description?: string
  activated: boolean
  cityId: number | null
  districtId: number | null
  wardId: number | null
}

export type Response = {
  GET: BaseResponse<OrgDetail>
}
