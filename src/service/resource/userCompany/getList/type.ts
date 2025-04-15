import { PageResponse } from '@/service/type'

type UserCompany = {
  id: number
  firstName: string
  lastName: string
  userName?: any
  email: string
  phoneNumber?: any
  imageUrl?: any
  lang?: any
  countryCode?: any
  birthDay?: any
  timeZone?: any
  gender: string
  isActive?: any
  roles: {
    id: number
    name: string
    code: string
    systemId: number
    level: number
    isActive: boolean
  }[]
  org?: any
}

export type ResUserCompany = PageResponse<Array<UserCompany>>

export type ResponseTotalUser = {
  haveAccount: number
  noAccount: number
}

export type ReqUserCompany = {
  name?: string
  companyId?: number | null
  orgId?: number | null
  haveUid?: boolean
  state?: string | null
  page: number
  size: number
}
